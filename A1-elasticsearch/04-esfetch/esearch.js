export async function get(path, filter) {
  let url = `http://localhost:9200${path}`
  console.log(`get:${url} filter=`, filter)
  let q = (filter) ? {query:{match:filter}} : {} 
  let r = await fetch(url, {
    method: 'GET',
    body: JSON.stringify(q),
    headers: {
        'content-type': 'application/json'
    }
  })
  let robj = await r.json()
  console.log(robj)
  return robj
}

export async function post(path, obj) {
  let url = `http://localhost:9200${path}`
  console.log(`post:${url} obj=`, obj)
  let r = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
        'content-type': 'application/json'
    }
  })
  let robj = await r.json()
  console.log(robj)
  return robj
}