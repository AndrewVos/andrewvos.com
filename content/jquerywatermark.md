---
title: "jquery.watermark"
date: 2010-04-20T00:00:00.000Z
draft: false
aliases:
  - "/2010/04/20/jquerywatermark"
---
A jQuery plugin that allows you to watermark text inputs. Watermarking is when you show some text in a text input, then hide the text when the user focuses on the textbox.

<script src="https://content.anmo.io/user-1-f7e0c9ef281078841fc5b671589a1d02-jquery.watermark.js" type="text/javascript"></script>
<script type="text/javascript">
  $(document).ready(function(){
    $("#example1").watermark("watermark text!");
    $("#example2").watermark("red watermark text!", "red");
  });
</script>

### Usage:  

```javascript
$("#example1").watermark(watermarkText, [watermarkColour]);
```    

### Example:

#### Without colour specified

<input type="text" id="example1"></input>

#### With colour specified

<input type="text" id="example2"></input>

  [Download the code here](https://content.anmo.io/user-1-f7e0c9ef281078841fc5b671589a1d02-jquery.watermark.js)

Peace!