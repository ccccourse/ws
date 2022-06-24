# PostgreSQL for mac

* https://www.postgresql.org/download/macosx/


```
Installation Directory: /Library/PostgreSQL/13
Server Installation Directory: /Library/PostgreSQL/13
Data Directory: /Library/PostgreSQL/13/data
Database Port: 5432
Database Superuser: postgres
Operating System Account: postgres
Database Service: postgresql-13
Command Line Tools Installation Directory: /Library/PostgreSQL/13
pgAdmin4 Installation Directory: /Library/PostgreSQL/13/pgAdmin 4
Stack Builder Installation Directory: /Library/PostgreSQL/13

```

## 安裝

```
csienqu-teacher:ccc csienqu$ ls /Library/PostgreSQL/13/bin
clusterdb         initdb            pg_controldata    pg_recvlogical    pg_test_timing    postmaster
createdb          oid2name          pg_ctl            pg_resetwal       pg_upgrade        psql
createuser        pg_archivecleanup pg_dump           pg_restore        pg_verifybackup   reindexdb
dropdb            pg_basebackup     pg_dumpall        pg_rewind         pg_waldump        vacuumdb
dropuser          pg_checksums      pg_isready        pg_standby        pgbench           vacuumlo
ecpg              pg_config         pg_receivewal     pg_test_fsync     postgres
```

```
Installation Directory: /Library/PostgreSQL/13
Server Installation Directory: /Library/PostgreSQL/13
Data Directory: /Library/PostgreSQL/13/data
Database Port: 5432
Database Superuser: postgres
Operating System Account: postgres
Database Service: postgresql-13
Command Line Tools Installation Directory: /Library/PostgreSQL/13
pgAdmin4 Installation Directory: /Library/PostgreSQL/13/pgAdmin 4
Stack Builder Installation Directory: /Library/PostgreSQL/13
```

## 加入系統路徑

編輯
```
csienqu-teacher:ccc csienqu$ vim ~/.bash_profile
```

加入

```
export PATH="/Library/PostgreSQL/13/bin:$PATH"
```

執行

```
csienqu-teacher:ccc csienqu$ source ~/.bash_profile
```

## 解除安裝

```
sienqu-teacher:ccc csienqu$ cd /Library/PostgreSQL/13
csienqu-teacher:13 csienqu$ ls
StackBuilder_3rd_party_licenses.txt     pgAdmin 4.app
bin                                     pgAdmin_3rd_party_licenses.txt
commandlinetools_3rd_party_licenses.txt pgAdmin_license.txt
data                                    pg_env.sh
debug_symbols                           scripts
doc                                     server_license.txt
include                                 share
installation_summary.log                stackbuilder.app
installer                               uninstall-postgresql.app
lib
csienqu-teacher:13 csienqu$ open uninstall-postgresql.app/
```

## 使用

e320 教師機密碼，同帳號

```
csienqu-teacher:13 csienqu$ psql -U postgres
Password for user postgres: 
psql (13.0)
Type "help" for help.

postgres=# help
You are using psql, the command-line interface to PostgreSQL.
Type:  \copyright for distribution terms
       \h for help with SQL commands
       \? for help with psql commands
       \g or terminate with semicolon to execute query
       \q to quit
postgres=# \q
```

## 創建資料庫

```
csienqu-teacher:13 csienqu$ createdb -U postgres mydb
Password: 
```

## 使用資料庫

```
csienqu-teacher:13 csienqu$ psql -U postgres mydb
Password for user postgres: 
psql (13.0)
Type "help" for help.

mydb=# SELECT version();
                                                   version                                                   
-------------------------------------------------------------------------------------------------------------
 PostgreSQL 13.0 on x86_64-apple-darwin, compiled by Apple clang version 11.0.3 (clang-1103.0.32.59), 64-bit
(1 row)

mydb=# \h
Available help:
  ABORT                            CREATE FOREIGN DATA WRAPPER      DROP ROUTINE
  ALTER AGGREGATE                  CREATE FOREIGN TABLE             DROP RULE
  ALTER COLLATION                  CREATE FUNCTION                  DROP SCHEMA
  ALTER CONVERSION                 CREATE GROUP                     DROP SEQUENCE
  ALTER DATABASE                   CREATE INDEX                     DROP SERVER
  ALTER DEFAULT PRIVILEGES         CREATE LANGUAGE                  DROP STATISTICS
  ALTER DOMAIN                     CREATE MATERIALIZED VIEW         DROP SUBSCRIPTION
  ALTER EVENT TRIGGER              CREATE OPERATOR                  DROP TABLE
  ALTER EXTENSION                  CREATE OPERATOR CLASS            DROP TABLESPACE
  ALTER FOREIGN DATA WRAPPER       CREATE OPERATOR FAMILY           DROP TEXT SEARCH CONFIGURATION
  ALTER FOREIGN TABLE              CREATE POLICY                    DROP TEXT SEARCH DICTIONARY
  ALTER FUNCTION                   CREATE PROCEDURE                 DROP TEXT SEARCH PARSER
mydb=# \q
```

## 表格操作

```
csienqu-teacher:13 csienqu$ psql -U postgres mydb
Password for user postgres: 
psql (13.0)
Type "help" for help.

mydb=# CREATE TABLE weather (
mydb(#     city            varchar(80),
mydb(#     temp_lo         int,           -- low temperature
mydb(#     temp_hi         int,           -- high temperature
mydb(#     prcp            real,          -- precipitation
mydb(#     date            date
mydb(# );
CREATE TABLE
mydb=# CREATE TABLE cities (
mydb(#     name            varchar(80),
mydb(#     location        point
mydb(# );
CREATE TABLE
mydb=# INSERT INTO weather VALUES ('San Francisco', 46, 50, 0.25, '1994-11-27');
INSERT 0 1
mydb=# INSERT INTO cities VALUES ('San Francisco', '(-194.0, 53.0)');
INSERT 0 1
mydb=# INSERT INTO weather (city, temp_lo, temp_hi, prcp, date)
mydb-#     VALUES ('San Francisco', 43, 57, 0.0, '1994-11-29');
INSERT 0 1
mydb=# INSERT INTO weather (date, city, temp_hi, temp_lo)
mydb-#     VALUES ('1994-11-29', 'Hayward', 54, 37);
INSERT 0 1
mydb=# SELECT * FROM weather;
     city      | temp_lo | temp_hi | prcp |    date    
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      43 |      57 |    0 | 1994-11-29
 Hayward       |      37 |      54 |      | 1994-11-29
(3 rows)

mydb=# SELECT city, temp_lo, temp_hi, prcp, date FROM weather;
     city      | temp_lo | temp_hi | prcp |    date    
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      43 |      57 |    0 | 1994-11-29
 Hayward       |      37 |      54 |      | 1994-11-29
(3 rows)

mydb=# SELECT city, (temp_hi+temp_lo)/2 AS temp_avg, date FROM weather;
     city      | temp_avg |    date    
---------------+----------+------------
 San Francisco |       48 | 1994-11-27
 San Francisco |       50 | 1994-11-29
 Hayward       |       45 | 1994-11-29
(3 rows)

mydb=# SELECT * FROM weather
mydb-#     WHERE city = 'San Francisco' AND prcp > 0.0;
     city      | temp_lo | temp_hi | prcp |    date    
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
(1 row)

mydb=# SELECT * FROM weather
mydb-#     ORDER BY city;
     city      | temp_lo | temp_hi | prcp |    date    
---------------+---------+---------+------+------------
 Hayward       |      37 |      54 |      | 1994-11-29
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      43 |      57 |    0 | 1994-11-29
(3 rows)

mydb=# SELECT * FROM weather
mydb-#     ORDER BY city, temp_lo;
     city      | temp_lo | temp_hi | prcp |    date    
---------------+---------+---------+------+------------
 Hayward       |      37 |      54 |      | 1994-11-29
 San Francisco |      43 |      57 |    0 | 1994-11-29
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
(3 rows)

mydb=# SELECT DISTINCT city
mydb-#     FROM weather;
     city      
---------------
 Hayward
 San Francisco
(2 rows)

mydb=# SELECT DISTINCT city
mydb-#     FROM weather
mydb-#     ORDER BY city;
     city      
---------------
 Hayward
 San Francisco
(2 rows)

mydb=# SELECT *
mydb-#     FROM weather, cities
mydb-#     WHERE city = name;
     city      | temp_lo | temp_hi | prcp |    date    |     name      | location  
---------------+---------+---------+------+------------+---------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | San Francisco | (-194,53)
 San Francisco |      43 |      57 |    0 | 1994-11-29 | San Francisco | (-194,53)
(2 rows)

mydb=# SELECT city, temp_lo, temp_hi, prcp, date, location
mydb-#     FROM weather, cities
mydb-#     WHERE city = name;
     city      | temp_lo | temp_hi | prcp |    date    | location  
---------------+---------+---------+------+------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | (-194,53)
 San Francisco |      43 |      57 |    0 | 1994-11-29 | (-194,53)
(2 rows)

mydb=# SELECT weather.city, weather.temp_lo, weather.temp_hi,
mydb-#        weather.prcp, weather.date, cities.location
mydb-#     FROM weather, cities
mydb-#     WHERE cities.name = weather.city;
     city      | temp_lo | temp_hi | prcp |    date    | location  
---------------+---------+---------+------+------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | (-194,53)
 San Francisco |      43 |      57 |    0 | 1994-11-29 | (-194,53)
(2 rows)

mydb=# SELECT *
mydb-#     FROM weather INNER JOIN cities ON (weather.city = cities.name);
     city      | temp_lo | temp_hi | prcp |    date    |     name      | location  
---------------+---------+---------+------+------------+---------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | San Francisco | (-194,53)
 San Francisco |      43 |      57 |    0 | 1994-11-29 | San Francisco | (-194,53)
(2 rows)

mydb=# SELECT W1.city, W1.temp_lo AS low, W1.temp_hi AS high,
mydb-#     W2.city, W2.temp_lo AS low, W2.temp_hi AS high
mydb-#     FROM weather W1, weather W2
mydb-#     WHERE W1.temp_lo < W2.temp_lo
mydb-#     AND W1.temp_hi > W2.temp_hi;
     city      | low | high |     city      | low | high 
---------------+-----+------+---------------+-----+------
 San Francisco |  43 |   57 | San Francisco |  46 |   50
 Hayward       |  37 |   54 | San Francisco |  46 |   50
(2 rows)

mydb=# SELECT *
mydb-#     FROM weather w, cities c
mydb-#     WHERE w.city = c.name;
     city      | temp_lo | temp_hi | prcp |    date    |     name      | location  
---------------+---------+---------+------+------------+---------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | San Francisco | (-194,53)
 San Francisco |      43 |      57 |    0 | 1994-11-29 | San Francisco | (-194,53)
(2 rows)

mydb=# SELECT max(temp_lo) FROM weather;
 max 
-----
  46
(1 row)

mydb=# SELECT city FROM weather WHERE temp_lo = max(temp_lo);   
ERROR:  aggregate functions are not allowed in WHERE
LINE 1: SELECT city FROM weather WHERE temp_lo = max(temp_lo);
                                                 ^
mydb=# SELECT city FROM weather WHERE temp_lo = max(temp_lo);  
ERROR:  aggregate functions are not allowed in WHERE
LINE 1: SELECT city FROM weather WHERE temp_lo = max(temp_lo);
                                                 ^
mydb=# SELECT city FROM weather
mydb-#     WHERE temp_lo = (SELECT max(temp_lo) FROM weather);
     city      
---------------
 San Francisco
(1 row)

mydb=# SELECT city, max(temp_lo)
mydb-#     FROM weather
mydb-#     GROUP BY city;
     city      | max 
---------------+-----
 Hayward       |  37
 San Francisco |  46
(2 rows)

mydb=# SELECT city, max(temp_lo)
mydb-#     FROM weather
mydb-#     GROUP BY city
mydb-#     HAVING max(temp_lo) < 40;
  city   | max 
---------+-----
 Hayward |  37
(1 row)

mydb=# SELECT city, max(temp_lo)
mydb-#     FROM weather
mydb-#     WHERE city LIKE 'S%'            -- (1)
mydb-#     GROUP BY city
mydb-#     HAVING max(temp_lo) < 40;
 city | max 
------+-----
(0 rows)

mydb=# UPDATE weather
mydb-#     SET temp_hi = temp_hi - 2,  temp_lo = temp_lo - 2
mydb-#     WHERE date > '1994-11-28';
UPDATE 2
mydb=# SELECT * FROM weather;
     city      | temp_lo | temp_hi | prcp |    date    
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      41 |      55 |    0 | 1994-11-29
 Hayward       |      35 |      52 |      | 1994-11-29
(3 rows)

mydb=# DELETE FROM weather WHERE city = 'Hayward';
DELETE 1
mydb=# SELECT * FROM weather;
     city      | temp_lo | temp_hi | prcp |    date    
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      41 |      55 |    0 | 1994-11-29
(2 rows)

mydb=# \q
```