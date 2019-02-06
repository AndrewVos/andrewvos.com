---
title: "CodeAnywhere 1.0.0.17"
date: 2010-01-20T00:00:00.000Z
draft: false
aliases:
  - "/2010/01/20/codeanywhere-10017"
---
### Version 1.0.0.17

* Now compiles to .NET 3.5 instead of 2.0</li>
* Added support for updating from the context menu</li>
* You can now return an object instead of a string, and CodeAnywhere will do a ToString on it before writing it back</li>

Sorry I  havent been around in a while. Thought Id stop by and release an awesome piece of software, CodeAnywhere.

Lets say you have this:

![codeanywhere1.png](/images/codeanywhere1.png)

And then you press CAPS LOCK:

![codeanywhere2.png](/images/codeanywhere2.png)

CodeDOM compiled the code and executed it. (Its C# code, by the way)

BAM.

I wrote this on the train travelling to work everyday.


~~Install it here~~ _not supporting this anymore_

Things to note:

* It uses UI Automation to grab the text, so some apps wont work. Notepad and Wordpad definitely do though.
* It's meant to set CAPS LOCK state to off when it starts. Some people have reported that it doesnt though. Comment below if this is you (state your OS please).
