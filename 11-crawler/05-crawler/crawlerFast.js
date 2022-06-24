async function getPage(url) {
  const res = await fetch(url);
  return await res.text();
}

function craw(urlList) {
  for (let i in urlList) {
    var url = urlList[i]
    console.log(url, 'download')
    getPage(url).then((page)=>{
      Deno.writeTextFile(`data/${i}.txt`, page)
    })
  }
}

var urlList = [
  'https://example.com', 
  'https://jsonplaceholder.typicode.com/todos/1', 
  'https://jsonplaceholder.typicode.com/todos/2', 
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5',
  'https://jsonplaceholder.typicode.com/todos/6',
  'https://jsonplaceholder.typicode.com/todos/7',
  'https://jsonplaceholder.typicode.com/todos/8',
  'https://jsonplaceholder.typicode.com/todos/9',
  'https://jsonplaceholder.typicode.com/todos/10',
  'https://jsonplaceholder.typicode.com/todos/11',
]

craw(urlList)
