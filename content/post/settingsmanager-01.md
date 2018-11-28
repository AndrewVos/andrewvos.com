---
title: "SettingsManager 0.1"
date: 2008-09-24T00:00:00.000Z
draft: false
aliases:
  - "/2008/09/24/settingsmanager-01"
---
SettingsManager is a library that dynamically generates a form to allow the client to edit settings.

Take for example a class that contains the following property:

```csharp
private bool someBoolean1 = true;
public bool SomeBoolean1 { get { return this.someBoolean1; } set { this.someBoolean1 = value; } }
```

To allow the client to edit this property we would typically create a Form and put some checkboxes, labels etc. on it.

With SettingsManager, we just inherit from the SettingsBase class, and apply a SettingAttribute to the property:

```csharp
public class MySettings : SettingsBase {
  private bool someBoolean1 = true;
  [Setting("Demo Category", "Booleans", "Please check this box.", typeof(BooleanEditor))]
  public bool SomeBoolean1 { get { return this.someBoolean1; } set { this.someBoolean1 = value; } }
}
```

And show a Settings form:

```csharp
MySettings settings = SettingsBase.Load&lt;MySettings&gt;("C:\\settings.xml");
TabbedSettingsForm settingsForm = new TabbedSettingsForm(settings);
settingsForm.ShowDialog();
```


And we get this:

![settingsmanager.png](/settingsmanager.png)

### Creating custom editors

You may have noticed that the SettingAttribute constructor takes a Type. This we can use to make custom editors for types. Let's take a look at the source for the DateEditor type.

```csharp
public class DateEditor : SettingEditorBase {

  DateTimePicker datePicker;

  public DateEditor(string text, object settingValue)
    : base(text, settingValue) {

    this.AddLabel(text);

    this.datePicker = new DateTimePicker();
    this.datePicker.Anchor = AnchorStyles.Top | AnchorStyles.Bottom | AnchorStyles.Left | AnchorStyles.Right;

    this.datePicker.Value = (DateTime)settingValue;
    this.datePicker.ValueChanged += new EventHandler(datePicker_ValueChanged);
    this.Controls.Add(datePicker);
  }

  private void datePicker_ValueChanged(object sender, EventArgs e) {
    this.OnSettingChanged(this.datePicker.Value);
  }
}
```

Notice that we inherit from SettingEditorBase, which is an abstract class. Basically all that is important in this code is that we call OnSettingChanged when the value is changed. This allows the Settings form to enable the Apply button.

### Creating custom Settings forms

Creating custom Settings forms is fairly easy. We inherit from SettingsFormBase, and override the InitializeEditors method. All our controls are placed on the contentPanel that is passed in as a parameter.

In InitializeEditors, we loop though this.Categories, and in turn loop through each categories' group. We then add each editor to the form.

The Ok, Cancel and Apply buttons are all taken care of in SettingsFormBase.

```csharp
public class TabbedSettingsForm : SettingsFormBase {
  TabControl tabControl;
  public TabbedSettingsForm(SettingsBase settings)
    : base(settings) {
    this.Padding = new Padding(10);
  }

  public override void InitializeEditors(Panel contentPanel) {
    this.tabControl = new TabControl();
    this.tabControl.Dock = DockStyle.Fill;
    contentPanel.Controls.Add(this.tabControl);

    foreach (SettingCategory category in this.Categories) {
      TabPage tabPage = new TabPage(category.Name);
      tabPage.AutoSize = true;
      this.tabControl.TabPages.Add(tabPage);

      TableLayoutPanel content = new TableLayoutPanel();
      content.Dock = DockStyle.Fill;
      content.AutoScroll = true;
      tabPage.Controls.Add(content);

      foreach (SettingGroup group in category.Groups) {
        content.Controls.Add(new GroupTitle(group.Name));
        foreach (SettingEditorBase editor in group.Editors) {
          content.Controls.Add(editor);
        }
      }
    }
  }
}
```

[Source and a Demo project is available here.](/settingsmanager.zip)
