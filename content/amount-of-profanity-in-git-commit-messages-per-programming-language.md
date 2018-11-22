---
title: "Amount of profanity in git commit messages per programming language"
date: 2011-02-21T00:00:00.000Z
draft: false
aliases:
  - "/2011/02/21/amount-of-profanity-in-git-commit-messages-per-programming-language"
---

**Edit #1**: By popular demand, [here's a list of the commit messages with swear words in them.](https://github.com/AndrewVos/github-statistics/blob/master/profanity.yml) Also I added a bar chart below because [this guy](http://news.ycombinator.com/item?id=2251220) has no idea how to interpret pie charts :)

**Edit #2**: I've added a bar chart showing the amount of times certain words were used. Note that I got the calculation of the initial words a tiny bit wrong (I forgot to downcase the words when searching).

**Edit #3**: Added another chart for [despo](https://twitter.com/#!/despo/status/40190176101666816)

**Edit #4**: By popular [demand](https://github.com/AndrewVos/github-statistics/issues#issue/1) I've added Perl!

Last weekend I really needed to write some code. Any code. I ended up ripping just under a million commit message from GitHub.

The plan was to find out how much profanity I could find in commit messages, and then show the stats by language. These are my findings:

Out of 929857 commit messages, I found 210 swear words (using [George Carlin's Seven dirty words](http://en.wikipedia.org/wiki/Seven_dirty_words) ).

Note that I ripped an equal amount of commit messages per language so the results aren't based on how many projects there are per language.

Here's that data in pretty format:

{{% profanity-charts %}}


### Profanity by Programming Language

<div class="chart1"></div>

### Total Swear Words

<div class="chart2"></div>

### Total Other Words

<div class="chart3"></div>

If anyone is interested, the source is up at [github.](https://github.com/AndrewVos/github-statistics)

