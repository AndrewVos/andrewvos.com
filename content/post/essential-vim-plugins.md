---
title: "Essential VIM Plugins"
date: 2012-11-05T00:00:00.000Z
draft: false
aliases:
  - "/2012/11/05/essential-vim-plugins"
---
## Plugin: vimux

vimux is a "vim plugin to interact with tmux". Want to run your unit tests in a tmux pane below your current vim session? Vimux will handle this for you.

Firstly, type :PromptVimTmuxCommand and vimux will ask you for a command to execute.
  This command will now be executed in a 20 character (by default) high tmux pane below your current vim session.

![vimux.png](/images/vimux.png)

As you can see, I executed `rake test`.

Now, to run this command again in the same tmux pane execute :RunLastVimTmuxCommand.

In the script below I have mapped \r to :RunLastVimTmuxCommand, which allows me to quickly run my tests.

```vim
" Run last tmux command with \r
:map <leader>r :wa\|:RunLastVimTmuxCommand<cr>
```

## Plugin: ctrlp.vim

ctrlp is the best plugin I've found for quickly searching and opening files.</p>

  Using NERDTree for finding files in your project? Now you're pressing CTRL-p, then typing in part of the file name that you're looking for.
  Other than finding files a hell of a lot faster than you would in a tree structure,
  a great benefit of this approach is that you actually start remembering what files are named, and end up with a better mental model of the project you're working on.

![ctrlp.png](/images/ctrlp.png)

## Per-project VIM config

This useful bit of code will automatically source any .vimlocal files that it finds in the current project.
  This allows you to have extra VIM config for certain projects.

```vim
"If there's a .vimlocal file automatically source it
function! SourceVimLocal()
  if filereadable(".vimlocal")
    source .vimlocal
  endif
endfunction
call SourceVimLocal()
```

I find it useful to map commands that run tests, for example:

```vim
  " Run all tests when pressing \r
  map <leader>r :wa\|!rake test<cr>
```
