---
title: "How to upload code to an Arduino Uno from the command line (part 2)"
date: 2011-04-30T00:00:00.000Z
type: post
draft: true
aliases:
  - "/2011/04/30/how-to-upload-code-to-an-arduino-uno-from-the-command-line-part-2"
---
I was having some weird problems with pretty much any Makefile I found to upload/compile arduino source code and upload it and I really didn't want to have to use that terrible IDE they provide so I rolled my own rake file.

  The entire rakefile is available on [github](https://github.com/AndrewVos/arduino-tools). Please feel free to fork and submit a pull request!

`curl` this code to a Rakefile and run `rake compile` to compile your project and `rake upload` to upload it.

```bash
curl https://github.com/AndrewVos/arduino-tools/raw/master/rakefile.rb > Rakefile
```
