---
title: "Showing git status in your bash prompt"
date: 2011-07-25T00:00:00.000Z
draft: true
aliases:
  - "/2011/07/25/showing-git-status-in-your-bash-prompt"
---
I use git almost exclusively for any new code I write, and I end up checking the status of my working directory quite often.

  I wanted to be able to view my git status without actually typing anything so I wrote a simple bash prompt that displays a
  git icon if you are in a git repository. If the repository has uncommited changes the icon turns red and if the working directory
  is clean then the icon turns green.

An example of what it should look like is below:

![git-prompt.png](/images/git-prompt.png)

Copy this code into your ~/.bash_profile and you're good to go!

```bash
function git_prompt {
  local STATUS=`git status 2>&1`
  if [[ "$STATUS" == *'Not a git repository'* ]]
  then
    echo "$"
  else
    if [[ "$STATUS" == *'working directory clean'* ]]
    then
      echo -e '\033[0;32m&plusmn;\033[m'
    else
      echo -e '\033[0;31m&plusmn;\033[m'
    fi
  fi
}

export PS1='\w $(git_prompt) '
```
