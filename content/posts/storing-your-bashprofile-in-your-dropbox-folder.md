---
title: "Storing your .bash_profile in your dropbox folder"
date: 2011-01-23T00:00:00.000Z
type: post
draft: true
aliases:
  - "/2011/01/23/storing-your-bashprofile-in-your-dropbox-folder"
---
I use a few different machines for work/home etc and I wanted to have some settings persisted across these machines using dropbox.

This is actually very simple.

First, create a place to store this file:

```bash
mkdir ~/Dropbox/bash
```

Then create a new bash_profile:

```bash
touch ~/Dropbox/bash_profile
```

Then we need to run this script whenever .bash_profile runs:

```bash
echo . ~/Dropbox/bash/bash_profile >> ~/.bash_profile
```

And lets try it out by setting a different prompt:

```bash
echo export PS1="\[\033[01;34m\]\w\[\033[00m\] \[\033[01;35m\]$\[\033[00m\] " >> ~/Dropbox/bash/bash_profile
```
