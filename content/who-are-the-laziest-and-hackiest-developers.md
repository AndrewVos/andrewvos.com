---
title: "Who are the laziest and hackiest developers?"
date: 2011-02-28T00:00:00.000Z
draft: false
aliases:
  - "/2011/02/28/who-are-the-laziest-and-hackiest-developers"
---
My [other post](/2011/02/21/amount-of-profanity-in-git-commit-messages-per-programming-language)
  on profanity in languages was quite popular, so I thought I would try out some new words.

  In the interest of not making mortal enemies I would like to note that this is all just for fun and I'm not implying that developers using X language are lazy/hacky.

Out of just below one million github commit messages, here are the stats on 'hack', 'workaround', and 'todo'.

<script type='text/javascript'>
$(function() {
  var allData = [
    {values: [96,  140, 91],  title: "C#"},
        {values: [270, 408, 189], title: "C++"},
        {values: [172, 438, 157], title: "C"},
        {values: [92,  344, 195], title: "Java"},
        {values: [181, 396, 125], title: "JavaScript"},
        {values: [169, 957, 174], title: "Perl"},
        {values: [56,  237, 74],  title: "PHP"},
        {values: [117, 421, 97],  title: "Python"},
        {values: [171, 645, 140], title: "Ruby"}
      ];

  var colours = ["#ED1C24", "#EF465B", "#E55A6B", "#E28159", "#F99C1C", "#F4D41E", "#97B546", "#36B669", "#42BDA5", "#00AEEF"];

  var chart = $("#chart");
  var template = '' +
  '<div class="progress">' +
  '  <div class="progress-bar" role="progressbar" style="width: 60%;">' +
  '  </div>' +
  '</div>';
  var labels = ["hack", "todo", "workaround"];

var max = 0;

      for (i = 0; i < allData.length; i++) {
for (a = 0; a < allData[i].values.length; a++) {
var z = allData[i].values[a];
if (z > max) {
max = z;
}
}
}

      for (i = 0; i < allData.length; i++) {
        chart.append($("<h3>" + allData[i].title + "</h3>"));
        
        for (a = 0; a < labels.length; a++) {
console.log(allData[i].title);
          var line = $(template);
          var width = (allData[i].values[a] / max) * 100;
          var progressBar = line.find(".progress-bar");
          progressBar.attr("style", "width: " + String(width) + "%;");
          progressBar.css("background-color", colours[i]);
          progressBar.text(labels[a] + " (" + allData[i].values[a] + ")");
          chart.append(line);
        }
      }

});
</script>

<div id="chart"></div>

Quite high there eh Perl?