var urlList = [
  // 'http://msn.com', 
  'https://en.wikipedia.org/'
]

var urlMap = {}

async function getPage(url) {
  try {
    const res = await fetch(url);
    return await res.text();  
  } catch (error) {
    console.log('getPage:', url, 'fail!')
  }
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

async function craw(urlList, urlMap) {
  for (let i=0; i<urlList.length; i++) {
    var url = urlList[i]
    if (!url.startsWith("https://en.wikipedia.org/")) continue;
    console.log(url, 'download')
    try {
      var page = await getPage(url)
      await Deno.writeTextFile(`data/${i}.txt`, page)
      var urls = html2urls(page)
      // console.log('urls=', urls)
      for (let surl of urls) {
        var absurl = surl
        if (surl.indexOf("//")<0) { // 是相對路徑
           absurl = (new URL(surl, url)).href
           // console.log('absurl=', absurl)
        }
        if (urlMap[absurl] == null) {
          urlList.push(absurl)
          urlMap[absurl] = 0
        }
      }
    } catch (error) {
      console.log('error=', error)
    }
  }
}

await craw(urlList, urlMap)
