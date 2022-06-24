async function getPage(url) {
  const res = await fetch(url);
  return await res.text();
}

function html2urls(html) {
  var r = /\shref\s*=\s*['"](.*)['"]/g
  var urls = []
  while (true) {
    let m = r.exec(html)
    if (m == null) break
    urls.push(m[1])
  }
  return urls
}

async function craw(urlList) {
  for (let i=0; i<urlList.length; i++) {
    var url = urlList[i]
    console.log(url, 'download')
    if (!url.startsWith('http')) continue
    try {
      var page = await getPage(url)
      await Deno.writeTextFile(`data/${i}.txt`, page)
      var urls = html2urls(page)
      for (url of urls) {
        urlList.push(url)
      } 
    } catch (error) {
      console.log('error=', error)
    }
  }
}

var urlList = [
  'https://example.com', 
]

await craw(urlList)
