# dejs -- Template Engine

* https://github.com/syumai/dejs
* https://ejs.co/
    * https://github.com/mde/ejs
    * https://ionicabizau.github.io/ejs-playground/

## use

```
<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it
```

## dejs1.js

```sh
$ deno run -A dejs1.js
Check file:///D:/ccc109/ws/deno/06-sqlite/04-template/dejs1.js
<body>
  
    <h1>hello, world!</h1>
  
</body>
```
