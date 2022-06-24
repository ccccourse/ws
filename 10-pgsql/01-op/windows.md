# windows postgresql

## 下載

* https://www.postgresql.org/download/windows/
    * [PostgreSQL Database Download](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

安裝好會位於 C:\Program Files\PostgreSQL\12\bin 底下，須設定 PATH

// 注意： postgres 13 版 deno 的 postgres 套件似乎無法支援

## 啟動

在搜尋找 service 選服務

// win-R 之後打 services.msc 會出現服務管理員

然後選 Postgresql 啟動之

=============== 以下好像不用做 ===============
## initdb

```
PS D:\ccc\ccc109a\ws\deno\06-database\pgsql> initdb -D db
The files belonging to this database system will be owned by user "user".      
This user must also own the server process.

The database cluster will be initialized with locale "Chinese (Traditional)_Taiwan.950".
Encoding "BIG5" implied by locale is not allowed as a server-side encoding.    
The default database encoding will be set to "UTF8" instead.
initdb: could not find suitable text search configuration for locale "Chinese (Traditional)_Taiwan.950"
The default text search configuration will be set to "simple".

Data page checksums are disabled.

creating subdirectories ... ok
selecting dynamic shared memory implementation ... windows
selecting default max_connections ... 100
selecting default shared_buffers ... 128MB
selecting default time zone ... Asia/Taipei
creating configuration files ... ok
running bootstrap script ... ok
performing post-bootstrap initialization ... ok
syncing data to disk ... ok

initdb: warning: enabling "trust" authentication for local connections
You can change this by editing pg_hba.conf or using the option -A, or
--auth-local and --auth-host, the next time you run initdb.

Success. You can now start the database server using:

    ^"C^:^/Program^ Files^/PostgreSQL^/12^/bin^/pg^_ctl^" -D db -l logfile start
```

## createdb

```
PS D:\ccc\ccc109a\ws\deno\06-database\pgsql> createdb mydb
createdb: error: could not connect to database template1: FATAL:  role "user" does not exist

```

* https://stackoverflow.com/questions/5189026/how-to-add-a-user-to-postgresql-in-windows

```
PS D:\ccc\ccc109a\ws\deno\06-database\pgsql> psql -U postgres
psql (12.3)
Type "help" for help.

postgres=# CREATE ROLE "user";
CREATE ROLE

postgres=# SELECT rolname FROM pg_roles;
          rolname
---------------------------
 pg_monitor
 pg_read_all_settings
 pg_read_all_stats
 pg_stat_scan_tables
 pg_read_server_files
 pg_write_server_files
 pg_execute_server_program
 pg_signal_backend
 postgres
 root
 ccc
 user
(12 rows)

```

# createdb

```
PS D:\ccc\ccc109a\ws\deno\06-database\pgsql> createdb mydb
createdb: error: could not connect to database template1: FATAL:  role "user" is not permitted to log in
PS D:\ccc\ccc109a\ws\deno\06-database\pgsql> createdb -U postgre mydb
createdb: error: could not connect to database template1: FATAL:  role "postgre" does not exist
PS D:\ccc\ccc109a\ws\deno\06-database\pgsql> createdb -U postgres mydb
createdb: error: database creation failed: ERROR:  database "mydb" already exists

=============== 以上好像不用做 ===============

PS D:\ccc\ccc109a\ws\deno\06-database\pgsql> createdb -U postgres mydb1
PS D:\ccc\ccc109a\ws\deno\06-database\pgsql> psql -U postgres mydb1
psql (12.3)
Type "help" for help.

mydb1=# SELECT version();
                          version
------------------------------------------------------------
 PostgreSQL 12.3, compiled by Visual C++ build 1914, 64-bit
(1 row)

mydb1=# CREATE TABLE weather (
mydb1(#     city            varchar(80),
mydb1(#     temp_lo         int,           -- low temperature 
mydb1(#     temp_hi         int,           -- high temperature
mydb1(#     prcp            real,          -- precipitation
mydb1(#     date            date
mydb1(# );
CREATE TABLE
mydb1=# CREATE TABLE cities (
mydb1(#     name            varchar(80),
mydb1(#     location        point
mydb1(# );
CREATE TABLE
mydb1=# INSERT INTO weather VALUES ('San Francisco', 46, 50, 0.25, '1994-11-27');
INSERT 0 1
mydb1=# INSERT INTO cities VALUES ('San Francisco', '(-194.0, 53.0)'); 
INSERT 0 1
mydb1=# INSERT INTO weather (city, temp_lo, temp_hi, prcp, date)       
mydb1-#     VALUES ('San Francisco', 43, 57, 0.0, '1994-11-29');       
INSERT 0 1
mydb1=# INSERT INTO weather (date, city, temp_hi, temp_lo)
mydb1-#     VALUES ('1994-11-29', 'Hayward', 54, 37);
INSERT 0 1
mydb1=# SELECT * FROM weather;
     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      43 |      57 |    0 | 1994-11-29
 Hayward       |      37 |      54 |      | 1994-11-29
(3 rows)


mydb1=# SELECT city, temp_lo, temp_hi, prcp, date FROM weather;        
     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      43 |      57 |    0 | 1994-11-29
 Hayward       |      37 |      54 |      | 1994-11-29
(3 rows)


mydb1=#      city      | temp_lo | temp_hi | prcp |    date
mydb1-# ---------------+---------+---------+------+------------        
mydb1-#  San Francisco |      46 |      50 | 0.25 | 1994-11-27
mydb1-#  San Francisco |      43 |      57 |    0 | 1994-11-29
mydb1-#  Hayward       |      37 |      54 |      | 1994-11-29
mydb1-#
mydb1-# SELECT city, (temp_hi+temp_lo)/2 AS temp_avg, date FROM weather;
ERROR:  syntax error at or near "city"
LINE 1: city      | temp_lo | temp_hi | prcp |    date
        ^
mydb1=# SELECT city, (temp_hi+temp_lo)/2 AS temp_avg, date FROM weather;
     city      | temp_avg |    date
---------------+----------+------------
 San Francisco |       48 | 1994-11-27
 San Francisco |       50 | 1994-11-29
 Hayward       |       45 | 1994-11-29
(3 rows)


mydb1=# SELECT * FROM weather
mydb1-#     WHERE city = 'San Francisco' AND prcp > 0.0;
     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
(1 row)


mydb1=# SELECT * FROM weather
mydb1-#     ORDER BY city;
     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 Hayward       |      37 |      54 |      | 1994-11-29
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      43 |      57 |    0 | 1994-11-29
(3 rows)


mydb1=# SELECT * FROM weather
mydb1-#     ORDER BY city, temp_lo;
     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 Hayward       |      37 |      54 |      | 1994-11-29
 San Francisco |      43 |      57 |    0 | 1994-11-29
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
(3 rows)


mydb1=# SELECT DISTINCT city
mydb1-#     FROM weather;
     city
---------------
 Hayward
 San Francisco
(2 rows)


mydb1=# SELECT DISTINCT city
mydb1-#     FROM weather
mydb1-#     ORDER BY city;
     city
---------------
 Hayward
 San Francisco
(2 rows)


mydb1=# SELECT *
mydb1-#     FROM weather, cities
mydb1-#     WHERE city = name;
     city      | temp_lo | temp_hi | prcp |    date    |     name      
| location
---------------+---------+---------+------+------------+---------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | San Francisco 
| (-194,53)
 San Francisco |      43 |      57 |    0 | 1994-11-29 | San Francisco 
| (-194,53)
(2 rows)


mydb1=# SELECT city, temp_lo, temp_hi, prcp, date, location
mydb1-#     FROM weather, cities
mydb1-#     WHERE city = name;
     city      | temp_lo | temp_hi | prcp |    date    | location      
---------------+---------+---------+------+------------+-----------    
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | (-194,53)     
 San Francisco |      43 |      57 |    0 | 1994-11-29 | (-194,53)     
(2 rows)


mydb1=# SELECT weather.city, weather.temp_lo, weather.temp_hi,
mydb1-#        weather.prcp, weather.date, cities.location
mydb1-#     FROM weather, cities
mydb1-#     WHERE cities.name = weather.city;
     city      | temp_lo | temp_hi | prcp |    date    | location      
---------------+---------+---------+------+------------+-----------    
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | (-194,53)     
 San Francisco |      43 |      57 |    0 | 1994-11-29 | (-194,53)     
(2 rows)


mydb1=# SELECT *
mydb1-#     FROM weather INNER JOIN cities ON (weather.city = cities.name);
     city      | temp_lo | temp_hi | prcp |    date    |     name      
| location
---------------+---------+---------+------+------------+---------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | San Francisco 
| (-194,53)
 San Francisco |      43 |      57 |    0 | 1994-11-29 | San Francisco 
| (-194,53)
(2 rows)


mydb1=# SELECT *
mydb1-#     FROM weather LEFT OUTER JOIN cities ON (weather.city = cities.name);
     city      | temp_lo | temp_hi | prcp |    date    |     name      
| location
---------------+---------+---------+------+------------+---------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | San Francisco 
| (-194,53)
 San Francisco |      43 |      57 |    0 | 1994-11-29 | San Francisco 
| (-194,53)
 Hayward       |      37 |      54 |      | 1994-11-29 |
|
(3 rows)


mydb1=# SELECT W1.city, W1.temp_lo AS low, W1.temp_hi AS high,
mydb1-#     W2.city, W2.temp_lo AS low, W2.temp_hi AS high
mydb1-#     FROM weather W1, weather W2
mydb1-#     WHERE W1.temp_lo < W2.temp_lo
mydb1-#     AND W1.temp_hi > W2.temp_hi;
     city      | low | high |     city      | low | high
---------------+-----+------+---------------+-----+------
 San Francisco |  43 |   57 | San Francisco |  46 |   50
 Hayward       |  37 |   54 | San Francisco |  46 |   50
(2 rows)


mydb1=# SELECT *
mydb1-#     FROM weather w, cities c
mydb1-#     WHERE w.city = c.name;
     city      | temp_lo | temp_hi | prcp |    date    |     name      
| location
---------------+---------+---------+------+------------+---------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | San Francisco 
| (-194,53)
 San Francisco |      43 |      57 |    0 | 1994-11-29 | San Francisco 
| (-194,53)
(2 rows)


mydb1=# SELECT max(temp_lo) FROM weather;
 max
-----
  46
(1 row)


mydb1=# SELECT city FROM weather
mydb1-#     WHERE temp_lo = (SELECT max(temp_lo) FROM weather);        
     city
---------------
 San Francisco
(1 row)


mydb1=# SELECT city, max(temp_lo)
mydb1-#     FROM weather
mydb1-#     GROUP BY city;
     city      | max
---------------+-----
 Hayward       |  37
 San Francisco |  46
(2 rows)


mydb1=# SELECT city, max(temp_lo)
mydb1-#     FROM weather
mydb1-#     GROUP BY city
mydb1-#     HAVING max(temp_lo) < 40;
  city   | max
---------+-----
 Hayward |  37
(1 row)


mydb1=# SELECT city, max(temp_lo)
mydb1-#     FROM weather
mydb1-#     WHERE city LIKE 'S%'            -- (1)
mydb1-#     GROUP BY city
mydb1-#     HAVING max(temp_lo) < 40;
 city | max
------+-----
(0 rows)


mydb1=# UPDATE weather
mydb1-#     SET temp_hi = temp_hi - 2,  temp_lo = temp_lo - 2
mydb1-#     WHERE date > '1994-11-28';
UPDATE 2
mydb1=# SELECT * FROM weather;
     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      41 |      55 |    0 | 1994-11-29
 Hayward       |      35 |      52 |      | 1994-11-29
(3 rows)


mydb1=# DELETE FROM weather WHERE city = 'Hayward';
DELETE 1
mydb1=# SELECT * FROM weather; 
     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      41 |      55 |    0 | 1994-11-29
(2 rows)
```






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

