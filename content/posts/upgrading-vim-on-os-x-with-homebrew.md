---
title: "Upgrading VIM on OS X with homebrew"
date: 2011-07-23T00:00:00.000Z
type: post
draft: true
aliases:
  - "/2011/07/23/upgrading-vim-on-os-x-with-homebrew"
---
You may have noticed that Homebrew doesn't include VIM in it's repositories. This is because they don't support "duplicates" which means that any command line tool that comes pre-installed with OS X will not be in their repository.

  There is a workaround though and it involves using [homebrew-alt](https://github.com/adamv/homebrew-alt).


Unfortunately the vim formula in homebrew-alt doesn't work if you happen to have Ruby 1.9.2 installed, so for now you'll have to use my fork.

```bash
# Install VIM
brew install https://raw.github.com/AndrewVos/homebrew-alt/master/duplicates/vim.rb

# Rename old vim to 'vim72' so that we can still access it if we need to
mv /usr/bin/vim /usr/bin/vim72
```

Now if you restart your terminal and check the VIM version you should see something like this:

```bash
$ vim --version
VIM - Vi IMproved 7.3 (2010 Aug 15, compiled Jul 23 2011 20:09:39)
MacOS X (unix) version
```

Great! You now have a more stable VIM.
