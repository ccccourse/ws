# blog 

```
PS D:\ccc109\ws\deno\13-pgsql\02-pgsql> createdb -U postgres blog
PS D:\ccc109\ws\deno\13-pgsql\02-pgsql> psql -U postgres blog
psql (12.3)
Type "help" for help.

blog=# CREATE TABLE posts (id SERIAL, title TEXT, body TEXT);
CREATE TABLE
blog=# INSERT INTO posts (title, body) VALUES ('aaa', 'aaaaa');
INSERT 0 1
blog=# INSERT INTO posts (title, body) VALUES ('bbb', 'bbbbb');
INSERT 0 1
blog=# SELECT * FROM posts
blog-# ;
 id | title | body
----+-------+-------
  1 | aaa   | aaaaa
  2 | bbb   | bbbbb
(2 rows)
```
