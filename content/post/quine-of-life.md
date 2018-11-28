---
title: "Quine of Life"
date: 2010-09-28T00:00:00.000Z
draft: false
aliases:
  - "/2010/09/28/quine-of-life"
---
This is my first [Quine](http://en.wikipedia.org/wiki/Quine_(computing)).

It's a [Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life) and was really quite interesting to build.

Basically the idea is that you can run a piece of code, and that code outputs itself. In this quine, every time you execute it it iterates the Game of Life at the top.

The code is [on GitHub](http://github.com/AndrewVos/Quine-of-Life) if you want to take a look at the process involved.

Here's a video:

{{% vimeo 15295218 %}}

Here's the code:

```ruby
"Quine of Life by Andrew Vos (andrewvos.com)";game=[
"                                                 ",
"                                                 ",
"                                                 ",
"                                                 ",
"                                                 ",
"                                                 ",
"                      X X X                      ",
"                      X   X                      ",
"                      X   X                      ",
"                      X   X                      ",
"                      X X X                      ",
"                                                 ",
"                                                 ",
"                                                 ",
"                                                 ",
"                                                 ",
"                                                 ",
];code=%!gw=49;gh=17;l="X";d=" ";ng=[];0.upto(gh-1){
|y|cl="";0.upto(gw-1){|x|lc=0;//;vo=[[-1,-1],[0,-1],
[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];vo.each{|ox,
oy|;if(0..gh-1).include?(y+oy);if(0..gw-1).include?(
x+ox);if(game[y+oy][x+ox,1]==l);lc+=1;end;end;end;};
st=d;if(game[y][x,1]==l);st=case(lc);when(0..1),(4..
8)then(d);when(2..3)then(l);end;else;if(lc==3);st=l;
end;end;cl+=st};ng<<cl;};av=%|34$81$117$105$110$101$
32$111$102$32$76$105$102$101$32$98$121$32$65$110$100
$114$101$119$32$86$111$115$32$40$97$110$100$114$101$
119$118$111$115$46$99$111$109$41$34$59|;";-)";print(
av.split("$").map{|i|i.to_i}.pack("C*"));puts"game=[
";ng.each_index{|ri|puts('"'+ng[ri]+'",')};x=33.chr;
print(""+"];"+'code=%'+x+code+x);puts(";eval(code)"+
";"+34.chr+"Finished"+34.chr)!;eval(code);"Finished"
```