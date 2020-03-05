---
title: "How to upload code to an Arduino Uno from the command line"
date: 2011-04-29T00:00:00.000Z
draft: true
aliases:
  - "/2011/04/29/how-to-upload-code-to-an-arduino-uno-from-the-command-line"
---
I recently bought an Arduino Uno and I wanted to be able to edit code in Vim and upload it directly from the command line.

* [Download](http://www.arduino.cc/en/Main/Software) and install the Arduino software.
* Get [this makefile](http://mjo.tc/atelier/2009/02/arduino-cli.html) and put it somewhere accessible to your project.
* Create a Makefile in your project directory that looks something like this:

<script src='https://gist.github.com/948441.js?file=gistfile1.mak'></script>

Now you can run `make` to compile or just `make upload` to compile and upload in one shot.
