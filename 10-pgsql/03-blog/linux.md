

```
guest@localhost:~/ws/deno/13-pgsql/03-blog$ deno run -A app.js
Server run at http://127.0.0.1:8000
query:sql= SELECT id, title, body FROM posts
r= Query {
  command: "SELECT",
  rowCount: 2,
  oid: null,
  rows: [ { id: 1, title: "aaa", body: "aaaaa" }, { id: 2, title: "bbb", body: "bbbbb" } ],
  fields: [
    {
      name: "id",
      tableID: 16401,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 16401,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 16401,
      columnID: 3,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    }
  ]
}
list:posts= [ { id: 1, title: "aaa", body: "aaaaa" }, { id: 2, title: "bbb", body: "bbbbb" } ]
create:post= { title: "ccc", body: "ccccc" }
query:sql= SELECT id, title, body FROM posts
r= Query {
  command: "SELECT",
  rowCount: 3,
  oid: null,
  rows: [
    { id: 1, title: "aaa", body: "aaaaa" },
    { id: 2, title: "bbb", body: "bbbbb" },
    { id: 3, title: "ccc", body: "ccccc" }
  ],
  fields: [
    {
      name: "id",
      tableID: 16401,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 16401,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 16401,
      columnID: 3,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    }
  ]
}
list:posts= [
  { id: 1, title: "aaa", body: "aaaaa" },
  { id: 2, title: "bbb", body: "bbbbb" },
  { id: 3, title: "ccc", body: "ccccc" }
]
query:sql= SELECT id, title, body FROM posts WHERE id=3
r= Query {
  command: "SELECT",
  rowCount: 1,
  oid: null,
  rows: [ { id: 3, title: "ccc", body: "ccccc" } ],
  fields: [
    {
      name: "id",
      tableID: 16401,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 16401,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 16401,
      columnID: 3,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    }
  ]
}
show:post= { id: 3, title: "ccc", body: "ccccc" }

```