# linux

```
root@localhost:/home/guest/ws/deno/13-pgsql/02-pgsql# sudo -u postgres psql
psql (10.12 (Ubuntu 10.12-0ubuntu0.18.04.1))
Type "help" for help.

postgres=# ALTER USER postgres PASSWORD 'ccc123456';
ALTER ROLE
postgres=# \q
```



* https://www.postgresql.org/docs/8.3/libpq-pgpass.html

30.13. The Password File
The file .pgpass in a user's home directory or the file referenced by PGPASSFILE can contain passwords to be used if the connection requires a password (and no password has been specified otherwise). On Microsoft Windows the file is named %APPDATA%\postgresql\pgpass.conf (where %APPDATA% refers to the Application Data subdirectory in the user's profile).

This file should contain lines of the following format:

    hostname:port:database:username:password
   
Each of the first four fields can be a literal value, or *, which matches anything. The password field from the first line that matches the current connection parameters will be used. (Therefore, put more-specific entries first when you are using wildcards.) If an entry needs to contain : or \, escape this character with \. A host name of localhost matches both TCP (host name localhost) and Unix domain socket (pghost empty or the default socket directory) connections coming from the local machine.

On Unix systems, the permissions on .pgpass must disallow any access to world or group; achieve this by the command chmod 0600 ~/.pgpass. If the permissions are less strict than this, the file will be ignored. On Microsoft Windows, it is assumed that the file is stored in a directory that is secure, so no special permissions check is made.

