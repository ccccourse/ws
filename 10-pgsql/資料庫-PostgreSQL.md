# 資料庫-PostgreSQL

## 安裝

* https://www.postgresql.org/download/windows/

安裝好會位於 C:\Program Files\PostgreSQL\12\bin 底下，須設定 PATH

## 學習

* [PostgreSQL 正體中文使用手冊](https://docs.postgresql.tw/)

## deno

* 套件 -- https://deno.land/x/postgres
    * 文件 -- https://deno-postgres.com/#/

## 如何停止 postgresql server

* https://serverfault.com/questions/311565/stop-postgresql-from-starting-on-windows

> Start -> Run -> (then type in:) services.msc // 啟動服務管理員

If it is running as a Windows service: Start -> Run -> (then type in:) services.msc. When you see PostgresSQL services set them to manual instead of automatic. If you do need them again, just fire up services.msc again and click the Start icon/button once you have reselected the PostgresSQL service.

## 如何修改密碼

https://www.postgresql.org/docs/9.4/sql-dropuser.html

忘記密碼，把 C:\Program Files\PostgreSQL\12\pg_hba.conf 中的 METHOD 從 md5 改為 trust 之後，重新啟動 
server 

# TYPE  DATABASE        USER            ADDRESS                 METHOD

# IPv4 local connections:
host    all             all             127.0.0.1/32            trust
# IPv6 local connections:
host    all             all             ::1/128                 trust

接著用 $ psql -U postgres 進去就可以了！

## 設定檔

* C:\Program Files\PostgreSQL\12\data\postgresql.conf

裡面的

```
listen_addresses = '*'		# what IP address(es) to listen on;
					# comma-separated list of addresses;
					# defaults to 'localhost'; use '*' for all
					# (change requires restart)
port = 5432				# (change requires restart)
max_connections = 100			# (change requires restart)
```

原本我在 msys2 占了 5432 , 結果外面這版變 5433 所以找不到！（改回　5432)

忘記密碼時需改: C:\Program Files\PostgreSQL\12\data\pg_hba.conf

Reset PostgreSQL password on Windows
Update your. %PROGRAMFILES%\PostgreSQL\9.0\data\pg_hba.conf. ...
Restart the PostgreSQL service.
Connect as user postgres with PGAdmin.
Set your password: ALTER USER postgres WITH PASSWORD 'Pgsq1p@ssword'; ...
Undo your changes to pg_hba.conf.
Restart the PostgreSQL service.
Restart the Noodle service.

## 操作

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc
$ createdb test

user@DESKTOP-96FRN6B MINGW64 /d/ccc
$ createdb mydb
createdb: error: database creation failed: ERROR:  database "mydb" already exists

user@DESKTOP-96FRN6B MINGW64 /d/ccc
$ pgsql mydb
bash: pgsql: command not found

user@DESKTOP-96FRN6B MINGW64 /d/ccc
$ psql mydb
psql (12.3, server 10.4)
Type "help" for help.

mydb=# \dt
        List of relations
 Schema |  Name   | Type  | Owner
--------+---------+-------+-------
 public | cities  | table | user
 public | weather | table | user
(2 rows)


mydb=# SELECT * FROM cities
mydb-# ;
     name      | location
---------------+-----------
 San Francisco | (-194,53)
(1 row)


mydb=# SELECT * FROM whether
mydb-# ;
ERROR:  relation "whether" does not exist
LINE 1: SELECT * FROM whether
                      ^
mydb=# SELECT * FROM weather;
     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      41 |      55 |    0 | 1994-11-29
(2 rows)


mydb=# 
```

這似乎是在 msys2 裝的那版！

