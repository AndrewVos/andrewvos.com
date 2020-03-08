---
title: "How to pair a bluetooth keyboard with an Ubuntu and Windows 10 dual boot"
date: 2017-07-12T15:34:53.939Z
type: post
draft: true
aliases:
  - "/how-to-pair-a-bluetooth-keyboard-with-an-ubuntu-and-windows-10-dual-boot"
---
This process is kind of finnicky, so I'm documenting it here so that I don't forget it.

Firstly, pair the device in Ubuntu.

Boot into Windows and pair the device there.

[Download and extract PSExec](https://technet.microsoft.com/en-us/sysinternals/bb897553.aspx).

In an admin command prompt, launch `regedit` with `psexec -s -i regedit` and store the value from `Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\BTHPORT\Parameters\Keys\{SOME_KEY}`.

You'll need the Value field. Take a picture of it or write it to a disk accessible from Ubuntu.

Write the device key into a file in a path something like this `/var/lib/bluetooth/A0\:C5\:89\:13\:3E\:3F/04:69:F8:BA:47:B5/info` in the `Key` field.

After a reboot you should have your keyboard working in Windows and Ubuntu.
