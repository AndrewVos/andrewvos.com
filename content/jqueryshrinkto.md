---
title: "jQuery.shrinkTo"
date: 2010-05-28T00:00:00.000Z
draft: false
aliases:
  - "/2010/05/28/jqueryshrinkto"
---
A cool little plugin that shrinks and fades any element to a position on the page.

[Download jquery.shrinkTo.js](https://content.anmo.io/user-1-d5bf36d1a17ae1e49e7ae4dab895db38-jquery.shrinkto.js)

<script src="https://content.anmo.io/user-1-d5bf36d1a17ae1e49e7ae4dab895db38-jquery.shrinkto.js"></script>
<script>
    $(document).ready(function(){
      $(document).click(function(event){
        $("#example1").shrinkTo(event.pageY, event.pageX);
        $("#example2").shrinkTo(event.pageY, event.pageX, function(){
          var callbackCalled = $(".callbackCalled:first");
          var cloned = callbackCalled.clone();
          cloned.insertAfter(callbackCalled);
          cloned.slideDown().delay(2000).slideUp();
        });
      });
    });
</script>
    
### Usage:

```javascript    
$("#example1").shrinkTo(top, left, [callback]);
```

###Example:

(Click anywhere on the page to test)


#### Without callback

<img id="example1" src="https://content.anmo.io/user-1-d08f4ebda86ef353a7eccd306c1911fe-jquery.png" alt="jQuery" />

#### With callback

<img id="example2" src="https://content.anmo.io/user-1-d08f4ebda86ef353a7eccd306c1911fe-jquery.png" alt="jQuery" />

<p class="callbackCalled" style="display:none; color:red;">Callback called!</p>