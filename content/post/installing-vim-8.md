---
title: "Installing VIM 8"
date: 2016-09-12T14:00:01.811Z
draft: false
aliases:
  - "/2016/09/12/installing-vim-8"
---
The latest VIM has been released, which includes some potentially neovim-killer features.

[Release notes are here](http://vimhelp.appspot.com/version8.txt.html)

## Linux

```bash
git clone https://github.com/vim/vim.git
cd vim
make
sudo make install
```

## Elementary OS (with clipboard support)

```bash
sudo apt-get install xorg-dev
git clone https://github.com/vim/vim.git
cd vim
# python-interp is not needed for clipboard support, but some plugins use it.
./configure --enable-pythoninterp
make
sudo make install
```

You can now remove `xorg-dev`:

```
sudo apt-get remove xorg-dev
```