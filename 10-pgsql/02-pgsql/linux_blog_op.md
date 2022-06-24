# linux blog op

```
guest@localhost:~/ws/deno/13-pgsql/02-pgsql$ createdb blog
guest@localhost:~/ws/deno/13-pgsql/02-pgsql$ psql blog
psql (10.12 (Ubuntu 10.12-0ubuntu0.18.04.1))
Type "help" for help.

blog=# CREATE TABLE posts (id SERIAL, title TEXT, body TEXT);
CREATE TABLE
blog=# INSERT INTO posts (title, body) VALUES ('aaa', 'aaaaa');
INSERT 0 1
blog=# INSERT INTO posts (title, body) VALUES ('bbb', 'bbbbb');
INSERT 0 1
blog=# SELECT * FROM posts;
 id | title | body  
----+-------+-------
  1 | aaa   | aaaaa
  2 | bbb   | bbbbb
(2 rows)

blog=# \q
```

## deno

```
guest@localhost:~/ws/deno/13-pgsql/02-pgsql$ deno run -A blog1.js
[ { id: 1, title: "aaa", body: "aaaaa" }, { id: 2, title: "bbb", body: "bbbbb" } ]
```