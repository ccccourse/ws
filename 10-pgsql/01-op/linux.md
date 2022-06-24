# 操作

* [PostgreSQL 正體中文使用手冊](https://docs.postgresql.tw/)
* https://help.ubuntu.com/community/PostgreSQL

## 將 guest 設為 superuser

```
$ sudo -u postgres createuser --superuser guest
```

## 開始操作


```
guest@localhost:~$ createdb mydb
guest@localhost:~$ psql mydb
psql (10.12 (Ubuntu 10.12-0ubuntu0.18.04.1))
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
mydb=# INSERT INTO weather (city, temp_lo, temp_hi, prcp, date) 
           VALUES ('San Francisco', 43, 57, 0.0, '1994-11-29');
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

mydb=# SELECT city, (temp_hi+temp_lo)/2 AS temp_avg, date FROM 
weather;
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

mydb=# SELECT *
mydb-#     FROM weather LEFT OUTER JOIN cities ON (weather.city = cities.name);
     city      | temp_lo | temp_hi | prcp |    date    |     name      | location
---------------+---------+---------+------+------------+---------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | San Francisco | (-194,53)
 San Francisco |      43 |      57 |    0 | 1994-11-29 | San Francisco | (-194,53)
 Hayward       |      37 |      54 |      | 1994-11-29 |               | 
(3 rows)

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

mydb=# CREATE VIEW myview AS
mydb-#     SELECT city, temp_lo, temp_hi, prcp, date, location
mydb-#         FROM weather, cities
mydb-#         WHERE city = name;
CREATE VIEW
mydb=# SELECT * FROM myview;
     city      | temp_lo | temp_hi | prcp |    date    | location
---------------+---------+---------+------+------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | (-194,53)
 San Francisco |      41 |      55 |    0 | 1994-11-29 | (-194,53)
(2 rows)
```




