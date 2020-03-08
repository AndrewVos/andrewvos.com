---
title: "Installing a .pfx Certificate on Heroku"
date: 2018-11-30T14:28:18Z
type: post
draft: false
---

There's nothing worse in this world than having a client buy an SSL certificate for you.

It's always a sign of great suffering to come.

For the first time in my career I have been handed a .pfx file and told to make it work on Heroku. I will attempt to document the steps here.

NOTE: A .pfx certificate is actually just a .p12 certificate. Microsoft is just trying to be difficult as usual.

```bash
# Rename your pfx to .p12
mv certificate.pfx certificate.p12

# Extract the private key
openssl pkcs12 -in certificate.p12 -nocerts -nodes -out server.key

# Extract the certificate chain
openssl pkcs12 -in certificate.p12 -nokeys -out server.crt

# Add the keys and certificate to Heroku
heroku certs:update server.crt server.key
```

And you're done!
