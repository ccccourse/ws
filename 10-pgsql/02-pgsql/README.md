# postgres

* https://deno.land/x/pg

## pg1.js

```
PS D:\ccc109\ws\deno\13-pgsql\02-pgsql> deno run -A pg1.js
Query {
  command: "SELECT",
  rowCount: 2,
  oid: null,
  rows: [
    {
      city: "San Francisco",
      temp_lo: 46,
      temp_hi: 50,
      prcp: 0.25,
      date: 1994-11-26T16:00:00.000Z
    },
    {
      city: "San Francisco",
      temp_lo: 41,
      temp_hi: 55,
      prcp: 0,
      date: 1994-11-28T16:00:00.000Z
    }
  ],
  fields: [
    {
      name: "city",
      tableID: 16398,
      columnID: 1,
      dataTypeID: 1043,
      dataTypeSize: -1,
      dataTypeModifier: 84,
      format: "text"
    },
    {
      name: "temp_lo",
      tableID: 16398,
      columnID: 2,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "temp_hi",
      tableID: 16398,
      columnID: 3,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "prcp",
      tableID: 16398,
      columnID: 4,
      dataTypeID: 700,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    },
    {
      name: "date",
      tableID: 16398,
      columnID: 5,
      dataTypeID: 1082,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: "text"
    }
  ]
}
```

## blog1.js

```
createdb -U postgres mydb1
```