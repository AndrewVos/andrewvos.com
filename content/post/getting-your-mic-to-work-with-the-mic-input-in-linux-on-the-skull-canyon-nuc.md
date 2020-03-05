---
title: "Getting your mic to work with the mic input in Linux on the Skull Canyon NUC"
date: 2017-11-13T22:26:50.970Z
draft: true
aliases:
  - "/getting-your-mic-to-work-with-the-mic-input-in-linux-on-the-skull-canyon-nuc"
---
This problem plagued me so I'm recording it here.

I've actually read this article a few times but never scrolled down far enough to find the answer.

https://communities.intel.com/thread/108361

```bash
echo 'options snd-hda-intel model=dell-headset-multi' | sudo tee -a /etc/modprobe.d/alsa-base.conf
```
