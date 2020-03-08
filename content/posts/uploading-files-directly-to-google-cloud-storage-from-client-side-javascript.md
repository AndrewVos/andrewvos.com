---
title: "Uploading files directly to Google Cloud Storage from client-side JavaScript"
date: 2017-03-19T17:45:21.429Z
type: post
draft: true
aliases:
  - "/uploading-files-directly-to-google-cloud-storage-from-client-side-javascript"
---
I've been writing a Rails app to act as a photo storage service for my personal photos so I thought I would try out the new Cloud Storage stuff. The whole process was kind of tricky so I thought I would document it here.

If you're writing a Rails app and planning on handling large file uploads then you most certainly do not want to handle the file uploads locally. Rails will block while the file is being uploaded, so your users might potentially have a long wait between page loads.

## Google Cloud Storage

### Authentication

The first thing you want to do is create a Project and a Storage Bucket. By default your `Compute Engine default service account` will not have access to write to your bucket.

- Go to `IAM & Admin` and add a new account there.
- Assign the permissions `Storage / Storage Admin` to your new account.
- Click on `Service accounts` and create a key for your new account.

At this point you'll have a new `JSON` key file.

I'm running on Heroku and I don't really like the idea of storing a key file in my git repository, so I'm going to put this keyfile into an environment variable. You may have your own way of working with environment variables but I tend to use [dotenv-rails](https://github.com/bkeepers/dotenv), so I just add a `.env` file with my json key in it.

```
  GOOGLE_CLOUD_PROJECT=YOUR_PROJECT_ID
  GOOGLE_CLOUD_KEYFILE_JSON='{ YOUR_KEY }'
```
 
### CORS

Now you need to setup [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) so that your users can `PUT` files directly to your Bucket.

Create this `cors.json`:

```json
  [
      {
        "origin": ["*"],
        "responseHeader": ["Content-Type", "Access-Control-Allow-Origin"],
        "method": ["PUT"],
        "maxAgeSeconds": 3600
      }
  ]
```

And in bash:

```bash
gsutil cors set cors.json gs://YOUR_BUCKET_NAME
```

### Generating the signed URL

A signed URL can be handed out to your client-side code and used to push the file directly
to `Storage`. Because we don't want to hand out our secrets to all your users, you should generate it in Ruby.

In `config/routes.rb`:

```
get '/signed_url', to: 'signed_url#signed_url'
```

Add this class for generating signed urls:

```ruby
class GoogleStorage
  def self.signed_url(method:, name:, expires:, content_type: '')
    full_path = "/#{ENV.fetch('GOOGLE_CLOUD_STORAGE_BUCKET')}/#{name}"

    signature = [method.to_s.upcase, '', content_type, expires.to_i, full_path].join("\n")

    digest = OpenSSL::Digest::SHA256.new
    signer = OpenSSL::PKey::RSA.new(storage_configuration['private_key'])
    signature = Base64.strict_encode64(signer.sign(digest, signature))
    signature = CGI.escape(signature)

    "https://storage.googleapis.com#{full_path}?GoogleAccessId=#{storage_configuration['client_email']}&Expires=#{expires.to_i}&Signature=#{signature}"
  end

  def self.storage_configuration
    @keyfile ||= JSON.parse(ENV.fetch('GOOGLE_CLOUD_KEYFILE_JSON'))
  end
end
```

And create a controller to handle the signing:

```ruby
class SignedUrlController < ApplicationController
  def signed_url
    render json: {
      signed_url: GoogleStorage.signed_url(
        method: :put,
        name: params[:name],
        expires: 5.minutes.from_now,
        content_type: params[:content_type]
      )
    }
  end
end
```

### The client code

Create a view with a `input[type=file]`:

```
<%= file_field_tag :files, multiple: true, class: 'js-file-upload' %>
```

And write some fairly simple JavaScript to handle the upload:

```js
$(document).on('change', 'js-file-upload', function () {
  var file = this.files[0]

  $.getJSON('/signed_url?name=' + encodeURIComponent(file.name) + '&content_type=' + encodeURIComponent(file.type), function (data) {
    var xhr = createCORSRequest('PUT', data.signed_url)
    xhr.onload = function () {
      if (xhr.status === 200) {
        alert('Yay!')
      } else {
        alert('failure')
      }
    }
    xhr.onerror = function () {
      alert('failure')
    }
    xhr.setRequestHeader('Content-Type', file.type)
    xhr.send(file)
  })
})

function createCORSRequest (method, url) {
  var xhr = new XMLHttpRequest()
  if ('withCredentials' in xhr) {
    xhr.open(method, url, true)
  } else if (typeof XDomainRequest !== 'undefined') {
    xhr = new XDomainRequest()
    xhr.open(method, url)
  } else {
    xhr = null
  }
  return xhr
}
```
