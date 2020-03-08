---
title: "Life changing vim tricks"
date: 2011-02-09T00:00:00.000Z
type: post
draft: true
aliases:
  - "/2011/02/09/life-changing-vim-tricks"
---
I've been learning a lot of vim lately, and honestly I'm very addicted. Here are some tricks I've learned today.

(Note that by default vim is set to use \ as <Leader>)</p>

### Run rspec right from vim.

Press <Leader>t and all rspec specs will be run

```vim
map <Leader>t :w\|!rspec spec<cr>
```

### Run rackup directly from vim

Press <Leader>r and rackup will launch

```vim
map <Leader>r :w\|!rackup<cr>
```

### Temporarily switch out of vim back to the console

To suspend vim and switch to the console:(C = Control)

```vim
C-z
```

To switch back to vim when you're done, type:

```bash
fg
```
