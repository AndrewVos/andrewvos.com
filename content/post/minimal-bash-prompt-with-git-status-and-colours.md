---
title: "Minimal bash prompt with git status and colours"
date: 2017-09-21T22:21:02.552Z
draft: false
aliases:
  - "/minimal-bash-prompt-with-git-status-and-colours"
---
Creating a custom bash PS1 is one of the most painful things in this world. Worse than falling down the stairs a hundred times.

Anyway, here's a nice minimal bash prompt that I hand whittled myself. It took years of my life away from me so I share it here. Nothing has meaning anymore.

## Demo

![image.png](/images/image.png)

## Setup
Paste the following into your `~/.bashrc`:

```bash
git_prompt_color () {
  if git rev-parse --git-dir > /dev/null 2>&1; then
    if ! git status | grep "nothing to commit" > /dev/null 2>&1; then
      echo -e "\033[0;31m"
      return 0
    fi
  fi
  echo -e "\033[0;37m"
}

DATE_COLOUR="\033[1;30m"
DIR_COLOUR="\033[1;34m"
RESET_COLOUR="\033[0m"

export PS1="\[$DATE_COLOUR\]\$(date +%H:%M:%S)\[$RESET_COLOUR\] \[$DIR_COLOUR\]\W\[$RESET_COLOUR\] \[\$(git_prompt_color)\]•\[$RESET_COLOUR\] "
```
