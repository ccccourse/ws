# openssl

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc109/ws/deno/12-security/03-RSA (master)
$ openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
  openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem
Generating a 4096 bit RSA private key
..................++
......................................................................................................................................................................++
writing new private key to 'key.pem'
Enter PEM pass phrase:
Verifying - Enter PEM pass phrase:
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:
State or Province Name (full name) [Some-State]:
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:
Email Address []:
```