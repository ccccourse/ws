# Blog -- PostgreSql

```
PS D:\ccc109\ws\deno\13-pgsql\03-blog> deno run -A app.js
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
      tableID: 24599,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 24599,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 24599,
      columnID: 3,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    }
  ]
}
list:posts= [ { id: 1, title: "aaa", body: "aaaaa" }, { id: 2, title: "bbb", body: "bbbbb" } ]
query:sql= SELECT id, title, body FROM posts WHERE id=1
r= Query {
  command: "SELECT",
  rowCount: 1,
  oid: null,
  rows: [ { id: 1, title: "aaa", body: "aaaaa" } ],
  fields: [
    {
      name: "id",
      tableID: 24599,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 24599,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 24599,
      columnID: 3,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    }
  ]
}
show:post= { id: 1, title: "aaa", body: "aaaaa" }
query:sql= SELECT id, title, body FROM posts WHERE id=2
r= Query {
  command: "SELECT",
  rowCount: 1,
  oid: null,
  rows: [ { id: 2, title: "bbb", body: "bbbbb" } ],
  fields: [
    {
      name: "id",
      tableID: 24599,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 24599,
      columnID: 3,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    }
  ]
}
show:post= { id: 2, title: "bbb", body: "bbbbb" }
PS D:\ccc109\ws\deno\13-pgsql\03-blog> deno run -A app.js
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
      tableID: 24599,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 24599,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 24599,
      columnID: 3,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    }
  ]
}
list:posts= [ { id: 1, title: "aaa", body: "aaaaa" }, { id: 2, title: "bbb", body: "bbbbb" } ]
query:sql= SELECT id, title, body FROM posts WHERE id=1
r= Query {
  command: "SELECT",
  rowCount: 1,
  oid: null,
  rows: [ { id: 1, title: "aaa", body: "aaaaa" } ],
  fields: [
    {
      name: "id",
      tableID: 24599,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 24599,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 24599,
      columnID: 3,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    }
  ]
}
show:post= { id: 1, title: "aaa", body: "aaaaa" }
create:post= { title: "ccc", body: "ccccc" }
PS D:\ccc109\ws\deno\13-pgsql\03-blog> deno run -A app.js
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
      tableID: 24599,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 24599,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      tableID: 24599,
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
PS D:\ccc109\ws\deno\13-pgsql\03-blog> deno run -A app.js
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
      tableID: 24599,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 24599,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 24599,
      columnID: 3,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    }
  ]
}
list:posts= [ { id: 1, title: "aaa", body: "aaaaa" }, { id: 2, title: "bbb", body: "bbbbb" } ]
query:sql= SELECT id, title, body FROM posts WHERE id=1
r= Query {
  command: "SELECT",
  rowCount: 1,
  oid: null,
  rows: [ { id: 1, title: "aaa", body: "aaaaa" } ],
  fields: [
    {
      name: "id",
      tableID: 24599,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 24599,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 24599,
      columnID: 3,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    }
  ]
}
show:post= { id: 1, title: "aaa", body: "aaaaa" }
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
      tableID: 24599,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 24599,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 24599,
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
      tableID: 24599,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 24599,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 24599,
      columnID: 3,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    }
  ]
}
show:post= { id: 3, title: "ccc", body: "ccccc" }
create:post= { title: "ddd", body: "dddd" }
query:sql= SELECT id, title, body FROM posts
r= Query {
  command: "SELECT",
  rowCount: 4,
  oid: null,
  rows: [
    { id: 1, title: "aaa", body: "aaaaa" },
    { id: 2, title: "bbb", body: "bbbbb" },
    { id: 3, title: "ccc", body: "ccccc" },
    { id: 4, title: "ddd", body: "dddd" }
  ],
  fields: [
    {
      name: "id",
      tableID: 24599,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 24599,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 24599,
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
  { id: 3, title: "ccc", body: "ccccc" },
  { id: 4, title: "ddd", body: "dddd" }
]
create:post= { title: "eee", body: "eeeee" }
query:sql= SELECT id, title, body FROM posts
r= Query {
  command: "SELECT",
  rowCount: 5,
  oid: null,
  rows: [
    { id: 1, title: "aaa", body: "aaaaa" },
    { id: 2, title: "bbb", body: "bbbbb" },
    { id: 3, title: "ccc", body: "ccccc" },
    { id: 4, title: "ddd", body: "dddd" },
    { id: 5, title: "eee", body: "eeeee" }
  ],
  fields: [
    {
      name: "id",
      tableID: 24599,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 24599,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 24599,
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
  { id: 3, title: "ccc", body: "ccccc" },
  { id: 4, title: "ddd", body: "dddd" },
  { id: 5, title: "eee", body: "eeeee" }
]
query:sql= SELECT id, title, body FROM posts WHERE id=4
r= Query {
  command: "SELECT",
  rowCount: 1,
  oid: null,
  rows: [ { id: 4, title: "ddd", body: "dddd" } ],
  fields: [
    {
      name: "id",
      tableID: 24599,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 24599,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 24599,
      columnID: 3,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    }
  ]
}
show:post= { id: 4, title: "ddd", body: "dddd" }
create:post= { title: "fff", body: "ffff\r\nffff\r\nffff\r\nffff\r\n" }
query:sql= SELECT id, title, body FROM posts
r= Query {
  command: "SELECT",
  rowCount: 6,
  oid: null,
  rows: [
    { id: 1, title: "aaa", body: "aaaaa" },
    { id: 2, title: "bbb", body: "bbbbb" },
    { id: 3, title: "ccc", body: "ccccc" },
    { id: 4, title: "ddd", body: "dddd" },
    { id: 5, title: "eee", body: "eeeee" },
    { id: 6, title: "fff", body: "ffff\r\nffff\r\nffff\r\nffff\r\n" }
  ],
  fields: [
    {
      name: "id",
      tableID: 24599,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 24599,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 24599,
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
  { id: 3, title: "ccc", body: "ccccc" },
  { id: 4, title: "ddd", body: "dddd" },
  { id: 5, title: "eee", body: "eeeee" },
  { id: 6, title: "fff", body: "ffff\r\nffff\r\nffff\r\nffff\r\n" }
]
query:sql= SELECT id, title, body FROM posts WHERE id=6
r= Query {
  command: "SELECT",
  rowCount: 1,
  oid: null,
  rows: [ { id: 6, title: "fff", body: "ffff\r\nffff\r\nffff\r\nffff\r\n" } ],
  fields: [
    {
      name: "id",
      tableID: 24599,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "title",
      tableID: 24599,
      columnID: 2,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "body",
      tableID: 24599,
      columnID: 3,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: "text"
    }
  ]
}
show:post= { id: 6, title: "fff", body: "ffff\r\nffff\r\nffff\r\nffff\r\n" }
```
