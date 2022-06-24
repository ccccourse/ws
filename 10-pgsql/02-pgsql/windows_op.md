# mydb

```
PS D:\ccc\ccc109a\ws\deno\06-database\pgsql> psql -U postgres mydb
psql (12.3)
Type "help" for help.

mydb=# SELECT * FROM weather;
     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      41 |      55 |    0 | 1994-11-29
(2 rows)

```