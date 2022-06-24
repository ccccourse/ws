var html = `
<html>
<body>
<a href='https://tw.msn.com/a/1.html'></a>
<a href= 'https://tw.msn.com/a/2.html'></a>
<a href ='https://tw.msn.com/b/1.html'></a>
<a href =   'https://tw.msn.com/b/2.html'></a>
<a href="https://tw.msn.com/c/1.html"></a>
<a href="/c/1.html">xxxx</a>
<a href="c/1.html">xxxx</a>
<a href="../../c/1.html">xxxx</a>
</body>
</html>
`

var r = /\shref\s*=\s*['"](.*)['"]/g

var urls = html.match(r)
console.log('urls=', urls)

while (true) {
  let m = r.exec(html)
  if (m == null) break
  console.log(`${m[1]}`)
}
