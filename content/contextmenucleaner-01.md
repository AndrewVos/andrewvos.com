---
title: "ContextMenuCleaner 0.1"
date: 2008-03-28T00:00:00.000Z
draft: false
aliases:
  - "/2008/03/28/contextmenucleaner-01"
---
I've been holding off releasing this for a while, but I think it's time now.

ContextMenuCleaner cleans some of your context menus in Windows, and currently supports cleaning:

* Desktop
* Windows Explorer
* Internet Explorer
* Windows Taskbar

  Basically, you just open up a context menu,

![ContextMenuCleaner - Dirty Menu](https://content.anmo.io/user-1-0cc1c5d96215c495448cd70291a7e486-contextmenucleaner-dirty-menu.png)

  then double click the system tray icon, and drag some items over to the Hidden section.

![ContextMenuCleaner - Config](https://content.anmo.io/user-1-a23db280510111e9aba75b444a4b6c1a-contextmenucleaner-config.png)

The next time you open this menu it should have been cleaned:

![ContextMenuCleaner - Better Menu](https://content.anmo.io/user-1-9f1312d0ca0dea7e99533fcc8eafe44c-contextmenucleaner-better-menu.png)

  Here's a before and after of the Internet Explorer context menu:

![ContextMenuCleaner - Before and After](https://content.anmo.io/user-1-69c58d84724fde61c9b6d48732293da4-contextmenucleaner-before-and-after.png)

EDIT: If you want to remove an item such as "Scan file.zip", you can drag an item over to the hidden items list, and rename it to "Scan *". This should remove all items that start with "Scan".

As usual, comment here with your bugs/suggestions.

Peace!  

<a href='http://betas.wickedorange.com/data/AndrewVos%5EContextMenuCleaner%5E0.1.0.0.zip'>Download ContextMenuCleaner 0.1</a>