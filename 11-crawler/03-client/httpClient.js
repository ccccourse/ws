const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const res = await fetch('https://example.com/');
const data = await res.text(); // res.json()
console.log(data)