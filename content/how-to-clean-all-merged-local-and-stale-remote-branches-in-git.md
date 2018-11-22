---
title: "How to clean all merged local and stale remote branches in git"
date: 2017-03-01T10:11:33.160Z
draft: false
aliases:
  - "/how-to-clean-all-merged-local-and-stale-remote-branches-in-git"
---
Here's a simple script I use to clean all local merged local branches, and also any stale references to remote branches. The latter will impact tab completion for example when you `git checkout <tab>` and see branches that don't exist in `origin` anymore.


- Create a script in your path called `git-clean-unused-branches`
- `chmod +x git-clean-unused-branches` it

Now you have the `git clean-unused-branches` command.

```bash
#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

# Delete any branches that have been merged.
# +e to allow grep to fail without a non-zero exit code there are no matches.
# Exclude branches called "master" and the current branch (prefixed with "* ")
set +e
LOCAL_BRANCHES=$(git branch --merged master | grep -v -e 'master' -e '\*' | tr -d ' ')
set -e

if [[ -n "$LOCAL_BRANCHES" ]]; then
  for BRANCH in $LOCAL_BRANCHES; do
    git branch -d "$BRANCH"
  done
fi

# Prune any stale remote references
git remote prune origin
```