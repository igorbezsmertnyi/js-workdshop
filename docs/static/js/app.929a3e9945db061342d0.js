webpackJsonp([1],{"+C8L":function(t,e){},"/+QN":function(t,e){},"0B5e":function(t,e){},"2qfV":function(t,e){},"4YHR":function(t,e){},"6ies":function(t,e){},"9zMW":function(t,e){},BwMQ:function(t,e){},CTF5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:a("v7i7"),alt:"Js Workshop Logo"}}),this._v(" "),e("h3",[this._v("JS Workshop")])])}]};var i=a("VU/8")({name:"Logo"},s,!1,function(t){a("BwMQ")},null,null).exports,r=a("bL2R"),o=a.n(r),_={name:"SideBar",data:function(){return{pages:o.a.pages}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"side-bar"},[a("nav",{staticClass:"side-bar__nav"},[a("ul",{staticClass:"side-bar__list"},t._l(t.pages,function(e,n){return a("router-link",{key:n,attrs:{to:e.href}},[a("li",{staticClass:"side-bar__item"},[t._v("\n          "+t._s(e.label)+"\n        ")])])}))])])},staticRenderFns:[]};var c={name:"AppHeader",components:{Logo:i,SideBar:a("VU/8")(_,v,!1,function(t){a("nPO+")},null,null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("logo"),this._v(" "),e("side-bar")],1)},staticRenderFns:[]};var d={name:"App",components:{AppHeader:a("VU/8")(c,l,!1,function(t){a("6ies")},null,null).exports}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("app-header"),this._v(" "),e("main",[e("router-view")],1)],1)},staticRenderFns:[]};var u=a("VU/8")(d,h,!1,function(t){a("4YHR")},null,null).exports,m=a("zL8q"),p=a.n(m),f=(a("tvR6"),a("/ocq")),b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tutorial"},[a("div",{staticClass:"tutorial__title"},[a("h1",[t._v("1. Introduction")])]),t._v(" "),a("div",{staticClass:"tutorial__body"},[a("h3",[t._v("What is JavaScript?")]),t._v(" "),a("p",[a("mark",[t._v("JavaScript")]),t._v(' was originally created for making web pages "live". Programs on this language are called '),a("em",[t._v("scripts")]),t._v(".\n      In browsers scripts straightly connected to HTML document and initialized at once when the page loaded.\n    ")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("Programs on JavaScript - regular string. They are not required special preparing before running")])]),t._v(" "),a("br"),t._v(" "),a("h3",[t._v("Why JavaScript?")]),t._v(" "),a("p",[t._v("\n      When was creating JavaScript, it had another name "),a("mark",[t._v('"LiveScript"')]),t._v(". Then was very popular Java, and marketers decided \n      that the similar name will make the language more popular on start.\n    ")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v('\n      Was planned that JavaScript will be such "small brother" of Java. But history ordered otherwise. But history ordered otherwise, \n      JavaScript fast grew up, and now JavaScript is independent language, with own specification\n      '),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/ECMAScript",target:"_blank"}},[t._v("(ECMAScript)")]),t._v(" and Java has nothing to do with it.\n    ")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("\n      It has many features which make learning hard but in this course, we will try to explain it\n    ")]),t._v(" "),a("p",{staticClass:"tutorial__body__lead"},[t._v("\n      JavaScript can be running not only in browsers but in other places, only a special program is needed - the interpreter.\n      The process of script implementation called interpretation.\n    ")])])])}]};var g=a("VU/8")({name:"Introduction"},b,!1,function(t){a("CTF5")},null,null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tutorial"},[a("div",{staticClass:"tutorial__title"},[a("h1",[t._v("2. What can JavaScript?")])]),t._v(" "),a("div",{staticClass:"tutorial__body"},[a("p",[t._v("\n      Contemporary "),a("mark",[t._v("JavaScript")]),t._v(' this is - "secure" general purpose programming language.\n      It hasn\'t low-level tools for working with memory and processors since, it was initially \n      focused on browsers, in which it is not required.\n    ')]),t._v(" "),a("p",[t._v("\n      As for the other possibilities - they depend on the environment where JavaScript is running. \n      In a browser, JS can do all that related with page "),a("mark",[t._v("content manipulation")]),t._v(", \n      "),a("mark",[t._v("user interaction")]),t._v(" and some extent, with a "),a("mark",[t._v("server")]),t._v(":\n    ")]),t._v(" "),a("ul",[a("li",[t._v("Creating HTML-tags, remove existing, changing component styles, hide and show element etc.")]),t._v(" "),a("li",[t._v("React to user actions, mouse clicks, moves and keyboard clicks")]),t._v(" "),a("li",[t._v("Sending request to the server and getting data without page reloading\n        "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ajax_(programming)",target:"_blank"}},[t._v("(AJAX)")])]),t._v(" "),a("li",[t._v("Get and set cookies, requests data, deduce messages")])])])])}]};var w=a("VU/8")({name:"WhatCanJs"},y,!1,function(t){a("lRpX")},null,null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tutorial"},[a("div",{staticClass:"tutorial__title"},[a("h1",[t._v("3. What can't JavaScript?")])]),t._v(" "),a("div",{staticClass:"tutorial__body"},[a("p",[t._v("\n      JavaScript - "),a("mark",[t._v("fast")]),t._v(" and "),a("mark",[t._v("powerful")]),t._v(" language but the browsers impose \n      on its execution some constraints...\n    ")]),t._v(" "),a("p",[t._v("\n      It's made for the user's security so that an attacker could not use JavaScript for getting \n      the personal data or somehow harm the user's computer.\n    ")]),t._v(" "),a("ul",[a("li",[t._v("\n        JavaScript can not read or write random files to the disk, copy them or opened the programs, \n        it hasn't straight access to the operating system\n      ")]),t._v(" "),a("li",[t._v("\n        JavaScript working on one tab cannot communicate with the other tabs, except for the case when\n        himself opened this window or several tabs from one source\n      ")])])])])}]};var x=a("VU/8")({name:"WhatCantJs"},C,!1,function(t){a("+C8L")},null,null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tutorial"},[e("div",{staticClass:"tutorial__title"},[e("h1",[this._v("4. Dev Tools")])]),this._v(" "),e("div",{staticClass:"tutorial__body"},[e("p",[this._v("\n      When developing scripts, errors are always possible. To read them in a convenient way, \n      and also get a lot of useful information about the execution of scripts, browsers have \n      development tools.\n    ")]),this._v(" "),e("strong",[this._v("For development suggested use Chrome or FireFox")]),this._v(" "),e("p",[this._v('\n      The other browsers, as a rule, they are in a position of "catching up" \n      with respect to the possibilities of embedded development tools. If the error, \n      for example, is in Internet Explorer, then we already look specifically at it, \n      but usually - Chrome / Firefox.\n    ')])])])}]};var E=a("VU/8")({name:"DevTools"},k,!1,function(t){a("9zMW")},null,null).exports,S=a("j7cn"),$=a.n(S),J={props:{id:{type:String,default:"embed__container"},options:{type:Object,default:function(){return{}}}},data:function(){return{vEmbed:{}}},mounted:function(){$.a.setOptions(this.options),this.vEmbed=new $.a({input:document.querySelector("#"+this.id)}),this.vEmbed.render()},beforeDestroy:function(){this.vEmbed.destroy()}},V={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.id}},[this._t("default")],2)},staticRenderFns:[]},T=a("VU/8")(J,V,!1,null,null,null).exports,j={name:"HelloWorld",components:{VEmbed:T},data:function(){return{gist:"ee44b438360346b023b2c9c767e4446d"}}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tutorial"},[t._m(0),t._v(" "),a("div",{staticClass:"tutorial__body"},[a("p",[t._v("\n      In this lesson, we will create a simple script and watch how it works.\n    ")]),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gist,options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/ee44b438360346b023b2c9c767e4446d\n    ")]),t._v(" "),a("p",{staticClass:"tutorial__body__lead"},[t._v("\n      Programs in JavaScript can be embedded everywhere in script tag\n    ")]),t._v(" "),a("br"),t._v(" "),t._m(1),t._v(" "),t._m(2)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tutorial__title"},[e("h1",[this._v("5. Hello World")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      In this example we used \n      "),e("code",[this._v("<script> ... <\/script>")]),this._v("\n      which contains executable code. When browser see\n      "),e("code",[this._v("<script>")]),this._v(":\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Starting show part of page before the "),a("mark",[t._v("script")])]),t._v(" "),a("li",[t._v("When browser found "),a("mark",[t._v("script")]),t._v(" tag, it starts to execute script")]),t._v(" "),a("li",[t._v("When script execution completed browser return to reading HTML document")])])}]};var q=a("VU/8")(j,R,!1,function(t){a("WfUg")},null,null).exports,O={name:"StringPage",components:{VEmbed:T},data:function(){return{gists:["dbdb4260a81d707a149e1424ae26a7d4","b1b8986a8d18644fb55a9cccca01da59","f6595c6a86fa62413ccf901a731c1161","e54b97da367a3e1fa4dca630f0a71290","f78f37bef350fe42047255fae016839c","fc1ba493640f982fadf94497a859e32f","bc35799a01ed7a4c49cdac87cc81c1f2"]}}},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tutorial"},[t._m(0),t._v(" "),a("div",{staticClass:"tutorial__body"},[t._m(1),t._v(" "),t._m(2),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[0],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/dbdb4260a81d707a149e1424ae26a7d4\n    ")]),t._v(" "),a("h3",[t._v("Enclosing quotation marks")]),t._v(" "),a("p",[t._v("\n      Let’s say you’re trying to use quotation marks inside a string. You’ll need to use opposite quotation marks \n      inside and outside. That means strings containing single quotes need to use double quotes and strings containing \n      double quotes need to use single quotes.\n    ")]),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[1],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/b1b8986a8d18644fb55a9cccca01da59\n    ")]),t._v(" "),a("p",[t._v("\n      Alternatively, you can use a backslash \\ to escape the quotation marks. This lets JavaScript know in advance that \n      you want to use a special character. Here’s what that looks like reusing the examples above:\n    ")]),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[2],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/f6595c6a86fa62413ccf901a731c1161\n    ")]),t._v(" "),a("h3",[t._v("Properties and methods")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[3],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/e54b97da367a3e1fa4dca630f0a71290\n    ")]),t._v(" "),t._m(5),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[4],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/f78f37bef350fe42047255fae016839c\n    ")]),t._v(" "),t._m(6),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[5],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/fc1ba493640f982fadf94497a859e32f\n    ")]),t._v(" "),t._m(7),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[6],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/bc35799a01ed7a4c49cdac87cc81c1f2\n    ")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tutorial__title"},[e("h1",[this._v("6.1 String")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("mark",[t._v("Strings")]),t._v(" are sequences of symbols in Unicode. String create by enclosing the text that \n      needs to be placed in them, into a double (\"\") or single ('') quotes. As already mentioned when we \n      working with the string we can rely on the appropriate object wrapper in the prototype of which there \n      are many useful methods, among them - "),a("mark",[t._v("substring()")]),t._v(", "),a("mark",[t._v("indexOf()")]),t._v(",\n      "),a("mark",[t._v("concat()")]),t._v(".\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      String, like other primitive value, is immutable. For example "),e("code",[this._v("concat()")]),this._v(" does not modify an \n      existing line but creates a new one.\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      Strings have their own built-in variables and functions, also known as "),e("mark",[this._v("properties")]),this._v(" and "),e("mark",[this._v("methods")]),this._v(". \n      Here are some of the most common ones.\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("mark",[this._v("length")]),e("br"),this._v("\n      A string’s length property keeps track of how many characters it has.\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("mark",[this._v("toLowerCase")]),e("br"),this._v("\n      A string’s toLowerCase method returns a copy of the string with its letters converted to lowercase. Numbers, symbols, \n      and other characters are not affected.\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("mark",[this._v("toUpperCase")]),e("br"),this._v("\n      A string’s toUpperCase method returns a copy of the string with its letters converted to capitals. Numbers, symbols, \n      and other characters are not affected.\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("mark",[this._v("trim")]),e("br"),this._v("\n      A string’s trim method returns a copy of the string with beginning and ending whitespace characters removed.\n    ")])}]};var F=a("VU/8")(O,W,!1,function(t){a("uFg/")},null,null).exports,A={name:"NumberPage",components:{VEmbed:T},data:function(){return{gists:["cb34f098b7e958cb0af2cc372302d253","d027d4f33021206f6c845dd25840bcf9","caa0e5ae05d2a3d46d85030ca6d9eb80"]}}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tutorial"},[t._m(0),t._v(" "),a("div",{staticClass:"tutorial__body"},[t._m(1),t._v(" "),t._m(2),t._v(" "),a("br"),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[0],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/cb34f098b7e958cb0af2cc372302d253\n    ")]),t._v(" "),a("br"),t._v(" "),t._m(3),t._v(" "),a("br"),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[1],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/d027d4f33021206f6c845dd25840bcf9\n    ")]),t._v(" "),a("br"),t._v(" "),t._m(4),t._v(" "),a("p",[t._v(' \n      The arithmetic operation in JS works quite the usual way, but we must pay attention to the fact that the "+" operator \n      can perform addition of numbers and concatenation of strings.\n    ')]),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[2],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/caa0e5ae05d2a3d46d85030ca6d9eb80\n    ")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tutorial__title"},[e("h1",[this._v("6.2 Number")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      JavaScript has only one type of number - this is a double-precision floating-point number. \n      This cause that the results of the calculation of some expressions are arithmetically incorrect.\n      Maybe you know that the result of "),e("code",[this._v("0.1 + 0.2")]),this._v(" doesn’t a "),e("code",[this._v("0.3")]),this._v(". But if you \n      work with integer this problem doesn’t happen.\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      JS has "),e("mark",[this._v("Number")]),this._v(" object, it represents an object wrapper for numeric values. The Object of type\n      Number can be created by using command "),e("code",[this._v("const a = new Number(10)")]),this._v(" or you can rely on automatically \n      behaver of JS described above. That allow you to execute methods contains in "),e("code",[this._v("Number.prototype")]),this._v("\n      and apply them to the number literals.\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      There are global functions for transform values of other types to a number type. This is - "),e("mark",[this._v("parseInt()")]),this._v(",\n      "),e("mark",[this._v("parseFloat()")]),this._v(" and constructor "),e("mark",[this._v("Number()")]),this._v(", which in this case used like regular function \n      which make transformation.\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      If, during the operation with numbers, something is produced that is not a number (during some calculation or trying \n      transformation to number) JavaScript doesn’t give an error, but the result of such an operation as the value of NaN\n      (Not-a-Number). For check, if some value is NaN you can use "),e("code",[this._v("isNaN()")]),this._v(" function.\n    ")])}]};var z=a("VU/8")(A,N,!1,function(t){a("2qfV")},null,null).exports,U={name:"BooleanPage",components:{VEmbed:T},data:function(){return{gists:["ecea9c6a751f266aa0225e26887c1bc4"]}}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tutorial"},[this._m(0),this._v(" "),e("div",{staticClass:"tutorial__body"},[this._m(1),this._v(" "),e("VEmbed",{staticClass:"tutorial__gist",attrs:{id:this.gists[1],options:{emoji:!0}}},[this._v("\n      https://gist.github.com/igorbezsmertnyi/ecea9c6a751f266aa0225e26887c1bc4\n    ")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tutorial__title"},[e("h1",[this._v("6.3 Boolean")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("mark",[this._v("Booleans")]),this._v(" are values that can be only one of two things: true or false. Anything “on” or “off,” \n      “yes” or “no,” or temporary is a usually good fit for a boolean. It’s useful to store booleans in variables \n      to keep track of their values and change them over time.\n    ")])}]};var L=a("VU/8")(U,P,!1,function(t){a("VigQ")},null,null).exports,I={name:"OperatorsPage",components:{VEmbed:T},data:function(){return{gists:["d51ee20f7499da7e01ec875edca6632b","fbd599e61c25c9a71f82e3d36404d6c4","b6c3473a1bdf59eb447be319f527b491","fe1da6903296b2049ad20812eec7aaf8","ed99bae2e7ecdf38ecdc8b062b37e49c","c618a88ddf0f50905e18c900a7ec2051"]}}},B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tutorial"},[t._m(0),t._v(" "),a("div",{staticClass:"tutorial__body"},[a("p",[t._v("\n      JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more.\n    ")]),t._v(" "),a("h3",[t._v("Arithmetic operators are used to perform arithmetic on numbers:")]),t._v(" "),t._m(1),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[0],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/d51ee20f7499da7e01ec875edca6632b\n    ")]),t._v(" "),a("h3",[t._v("JavaScript Assignment Operators")]),t._v(" "),t._m(2),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[1],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/fbd599e61c25c9a71f82e3d36404d6c4\n    ")]),t._v(" "),a("br"),t._v(" "),a("h3",[t._v("JavaScript String Operators")]),t._v(" "),a("p",[t._v('\n      The + operator, and the += operator can also be used to concatenate (add) strings.\n      Given that str1 = "Good ", str2 = "Morning", and str3 = "", the table below explains the operators:\n    ')]),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[2],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/b6c3473a1bdf59eb447be319f527b491\n    ")]),t._v(" "),a("br"),t._v(" "),a("h3",[t._v("Comparison Operators")]),t._v(" "),a("p",[t._v("\n      Comparison operators are used in logical statements to determine equality or difference between variables or values.\n      Given that x = 5, the table below explains the comparison operators:\n    ")]),t._v(" "),t._m(3),t._v(" "),a("br"),t._v(" "),a("h3",[t._v("Conditional (Ternary) Operator")]),t._v(" "),a("p",[t._v("The conditional operator assigns a value to a variable based on a condition.")]),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[3],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/fe1da6903296b2049ad20812eec7aaf8\n    ")]),t._v(" "),a("br"),t._v(" "),a("h3",[t._v("Logical Operators")]),t._v(" "),a("p",[t._v("\n      Logical operators are used to determine the logic between variables or values.\n      Given that x = 6 and y = 3, the table below explains the logical operators:\n    ")]),t._v(" "),t._m(4),t._v(" "),a("h3",[t._v("JavaScript Bitwise Operators")]),t._v(" "),a("p",[t._v("\n      Bit operators work on 32 bits numbers. Any numeric operand in the operation \n      is converted into a 32 bit number. The result is converted back to a JavaScript number.\n    ")]),t._v(" "),t._m(5),t._v(" "),a("br"),t._v(" "),a("h3",[t._v("The typeof Operator")]),t._v(" "),t._m(6),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[5],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/ed99bae2e7ecdf38ecdc8b062b37e49c\n    ")]),t._v(" "),a("h3",[t._v("The in Operator")]),t._v(" "),a("p",[t._v("The in operator returns true if the specified property is in the specified object, otherwise false:")]),t._v(" "),a("VEmbed",{staticClass:"tutorial__gist",attrs:{id:t.gists[6],options:{emoji:!0}}},[t._v("\n      https://gist.github.com/igorbezsmertnyi/c618a88ddf0f50905e18c900a7ec2051\n    ")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tutorial__title"},[e("h1",[this._v("7. Operators")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"w3-table-all notranslate"},[a("thead",{staticClass:"tutorial__table__2"},[a("tr",[a("th",[t._v("Operator")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("+")]),t._v(" "),a("td",[t._v("Addition")])]),t._v(" "),a("tr",[a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Subtraction")])]),t._v(" "),a("tr",[a("td",[t._v("*")]),t._v(" "),a("td",[t._v("Multiplication")])]),t._v(" "),a("tr",[a("td",[t._v("&")]),t._v(" "),a("td",[t._v("Modulus (Division Remainder)")])]),t._v(" "),a("tr",[a("td",[t._v("++")]),t._v(" "),a("td",[t._v("Increment")])]),t._v(" "),a("tr",[a("td",[t._v("--")]),t._v(" "),a("td",[t._v("Decrement")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"w3-table-all notranslate"},[a("thead",{staticClass:"tutorial__table__3"},[a("tr",[a("th",[t._v("Operator")]),t._v(" "),a("th",[t._v("Example")]),t._v(" "),a("th",[t._v("Same As")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("=")]),t._v(" "),a("td",[t._v("x = y")]),t._v(" "),a("td",[t._v("x = y")])]),t._v(" "),a("tr",[a("td",[t._v("+=")]),t._v(" "),a("td",[t._v("x += y")]),t._v(" "),a("td",[t._v("x = x + y")])]),t._v(" "),a("tr",[a("td",[t._v("-=")]),t._v(" "),a("td",[t._v("x -= y")]),t._v(" "),a("td",[t._v("x = x - y")])]),t._v(" "),a("tr",[a("td",[t._v("*=")]),t._v(" "),a("td",[t._v("x *= y")]),t._v(" "),a("td",[t._v("x = x * y")])]),t._v(" "),a("tr",[a("td",[t._v("/=")]),t._v(" "),a("td",[t._v("x /= y")]),t._v(" "),a("td",[t._v("x = x / y")])]),t._v(" "),a("tr",[a("td",[t._v("%=")]),t._v(" "),a("td",[t._v("x %= y")]),t._v(" "),a("td",[t._v("x = x % y")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"w3-table-all notranslate"},[a("thead",{staticClass:"tutorial__table__3"},[a("tr",[a("th",[t._v("Operator")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Comparing")]),t._v(" "),a("th",[t._v("Returns")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("==")]),t._v(" "),a("td",[t._v("equal to")]),t._v(" "),a("td",[t._v("x == 8")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("===")]),t._v(" "),a("td",[t._v("equal value and equal type")]),t._v(" "),a("td",[t._v('x === "5"')]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("!=")]),t._v(" "),a("td",[t._v("not equal")]),t._v(" "),a("td",[t._v("x != 8")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("!==")]),t._v(" "),a("td",[t._v("not equal value or not equal type")]),t._v(" "),a("td",[t._v('x !== "5"')]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v(">")]),t._v(" "),a("td",[t._v("greater than")]),t._v(" "),a("td",[t._v("x > 8")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("<")]),t._v(" "),a("td",[t._v("less than")]),t._v(" "),a("td",[t._v("x < 8")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v(">=")]),t._v(" "),a("td",[t._v("greater than or equal to")]),t._v(" "),a("td",[t._v("x >= 8")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("<=")]),t._v(" "),a("td",[t._v("less than or equal to")]),t._v(" "),a("td",[t._v("x <= 8")]),t._v(" "),a("td",[t._v("true")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"w3-table-all notranslate"},[a("thead",{staticClass:"tutorial__table__3"},[a("tr",[a("th",[t._v("Operator")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Example")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("&&")]),t._v(" "),a("td",[t._v("add")]),t._v(" "),a("td",[t._v("(x < 10 && y > 1) is true")])]),t._v(" "),a("tr",[a("td",[t._v("||")]),t._v(" "),a("td",[t._v("or")]),t._v(" "),a("td",[t._v("(x === 5 || y === 5) is false")])]),t._v(" "),a("tr",[a("td",[t._v("!")]),t._v(" "),a("td",[t._v("not")]),t._v(" "),a("td",[t._v("!(x === y) is true")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"w3-table-all notranslate"},[a("thead",{staticClass:"tutorial__table__6"},[a("tr",[a("th",[t._v("Operator")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Example")]),t._v(" "),a("th",[t._v("Same as")]),t._v(" "),a("th",[t._v("Result")]),t._v(" "),a("th",[t._v("Decimal")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("&")]),t._v(" "),a("td",[t._v("AND")]),t._v(" "),a("td",[t._v("x = 5 & 1")]),t._v(" "),a("td",[t._v("0101 & 0001")]),t._v(" "),a("td",[t._v("0001")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("|")]),t._v(" "),a("td",[t._v("OR")]),t._v(" "),a("td",[t._v("x = 5 | 1")]),t._v(" "),a("td",[t._v("0101 | 0001")]),t._v(" "),a("td",[t._v("0101")]),t._v(" "),a("td",[t._v("5")])]),t._v(" "),a("tr",[a("td",[t._v("~")]),t._v(" "),a("td",[t._v("NOT")]),t._v(" "),a("td",[t._v("x = ~ 5")]),t._v(" "),a("td",[t._v("~0101")]),t._v(" "),a("td",[t._v("1010")]),t._v(" "),a("td",[t._v("10")])]),t._v(" "),a("tr",[a("td",[t._v("^")]),t._v(" "),a("td",[t._v("XOR")]),t._v(" "),a("td",[t._v("x = 5 ^ 1")]),t._v(" "),a("td",[t._v("x = 0101 ^ 0001")]),t._v(" "),a("td",[t._v("0100")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("<<")]),t._v(" "),a("td",[t._v("Left shift")]),t._v(" "),a("td",[t._v("x = 5 << 1")]),t._v(" "),a("td",[t._v("0101 << 1")]),t._v(" "),a("td",[t._v("1010")]),t._v(" "),a("td",[t._v("10")])]),t._v(" "),a("tr",[a("td",[t._v(">>")]),t._v(" "),a("td",[t._v("Right shift")]),t._v(" "),a("td",[t._v("x = 5 >> 1")]),t._v(" "),a("td",[t._v("0101 >> 1")]),t._v(" "),a("td",[t._v("0010")]),t._v(" "),a("td",[t._v("2")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      The "),e("mark",[this._v("typeof")]),this._v(" operator returns the type of a variable, object, function or expression:\n    ")])}]};var H=a("VU/8")(I,B,!1,function(t){a("/+QN")},null,null).exports,M={name:"PrimitiveTypes",components:{VEmbed:T},data:function(){return{gists:[]}}},D={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tutorial"},[a("div",{staticClass:"tutorial__title"},[a("h1",[t._v("6. Primitive Types")])]),t._v(" "),a("div",{staticClass:"tutorial__body"},[a("p",[t._v("\n      JavaScript has the next primitive data types: "),a("mark",[t._v("number")]),t._v(", "),a("mark",[t._v("string")]),t._v(",\n      "),a("mark",[t._v("boolean")]),t._v(", "),a("mark",[t._v("undefined")]),t._v(", "),a("mark",[t._v("null")]),t._v(". At once it is necessary to note that,\n      when we working with primitive data types, for example with strings we can call they methods and options without\n      any transformations. That because, when we trying to implement some methods literals are automatically\n      transformed to the relevant object with properties.\n    ")])])])}]};var Q=a("VU/8")(M,D,!1,function(t){a("0B5e")},null,null).exports;n.default.use(f.a);var G=new f.a({mode:"history",base:"js-workshop",routes:[{path:"/",name:"Introduction",component:g},{path:"/what-can-javasctipt",name:"WhatCanJs",component:w},{path:"/what-cant-javascrip",name:"WhatCantJs",component:x},{path:"/dev-tools",name:"DevTools",component:E},{path:"/hello-world",name:"HelloWorld",component:q},{path:"/string-type",name:"StringPage",component:F},{path:"/number-type",name:"NumberPage",component:z},{path:"/boolean-type",name:"BooleanPage",component:L},{path:"/operators",name:"OperatorsPage",component:H},{path:"/primitive-types",name:"PrimitiveTypes",component:Q}]});n.default.config.productionTip=!1,n.default.use(p.a),new n.default({el:"#app",router:G,components:{App:u},template:"<App/>"})},VigQ:function(t,e){},WfUg:function(t,e){},bL2R:function(t,e){t.exports={pages:[{label:"1. Intorduction",href:"/"},{label:"2. What can JavaScript?",href:"/what-can-javasctipt"},{label:"3. What can't JavaScript?",href:"/what-cant-javascrip"},{label:"4. Dev Tools",href:"/dev-tools"},{label:"5. Hello World",href:"/hello-world"},{label:"6. Primitive Types",href:"/primitive-types"},{label:"6.1 String",href:"/string-type"},{label:"6.2 Number",href:"/number-type"},{label:"6.3 Boolean",href:"/boolean-type"},{label:"7. Operators",href:"/operators"}]}},lRpX:function(t,e){},"nPO+":function(t,e){},tvR6:function(t,e){},"uFg/":function(t,e){},v7i7:function(t,e,a){t.exports=a.p+"static/img/js-logo.75fabe5.png"}},["NHnr"]);
//# sourceMappingURL=app.929a3e9945db061342d0.js.map