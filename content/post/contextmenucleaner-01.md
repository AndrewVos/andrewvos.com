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

![ContextMenuCleaner - Dirty Menu](/images/contextmenucleaner-dirty-menu.png)

  then double click the system tray icon, and drag some items over to the Hidden section.

![ContextMenuCleaner - Config](/images/contextmenucleaner-config.png)

The next time you open this menu it should have been cleaned:

![ContextMenuCleaner - Better Menu](/images/contextmenucleaner-better-menu.png)

  Here's a before and after of the Internet Explorer context menu:

![ContextMenuCleaner - Before and After](/images/contextmenucleaner-before-and-after.png)

EDIT: If you want to remove an item such as "Scan file.zip", you can drag an item over to the hidden items list, and rename it to "Scan *". This should remove all items that start with "Scan".

As usual, comment here with your bugs/suggestions.

Peace!  

<a href='http://betas.wickedorange.com/data/AndrewVos%5EContextMenuCleaner%5E0.1.0.0.zip'>Download ContextMenuCleaner 0.1</a>
