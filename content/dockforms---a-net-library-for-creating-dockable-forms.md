---
title: "DockForms - A .Net library for creating dockable forms"
date: 2007-11-18T00:00:00.000Z
draft: false
aliases:
  - "/2007/11/18/dockforms---a-net-library-for-creating-dockable-forms"
---
This simple library helps you to create windows similar to the ones used in Photoshop.

![DockForms - A .Net library for creating dockable forms](https://content.anmo.io/user-1-cbe0ce7534507c699ae6bbe9cde55801-dockforms.png)

Example Usage:

Firstly, add a reference to DockForms.Dll, then add a Dock control to your form.

Now we need to create some dockable forms. Create a new class called DockForm1, and inherit DockForms.DockForm.

```vbnet
Public Class DockForm1
  Inherits DockForms.DockForm

  Public Sub New()
  End Sub
End Class
```

Go to the code for your main form and add the following:

```vbnet
For index As Integer = 1 To 3
  Dim df As New DockForm1
  df.Owner = Me
  df.Text = "Dock Form " & index.ToString
  Me.Dock1.AddForm(df, True)
  df.Show()
Next index

Me.Dock1.SetDockTheme(New DockForms.DockThemes.BeOS)
```

And we're done. This will add three dockable forms to your main form.

DockForms also contains a Theme Maker tool, which allows you to easily create themes, and even generates C#/VB code for you!

[Download DockForms.Zip](https://content.anmo.io/user-1-9186c63009c87adcd8e986b39050bae9-dockforms.zip)