
https://noob.tw/nginx-reverse-proxy/


## nginx

* http://www.cclin.xyz/2015/07/nginx.html

```
完全移除, 安裝,重啟nginx
如何完全移除nginx

 sudo apt-get remove nginx nginx-common
 sudo apt-get purge nginx nginx-common

 sudo apt-get autoremove

再安裝niginx

sudo apt-get install nginx

重啟nginx

sudo /etc/init.d/nginx restart

```

然後照 certbot 官網的指示

https://certbot.eff.org/instructions?ws=nginx&os=ubuntubionic

```
root@localhost:/etc# sudo ln -s /snap/bin/certbot /usr/bin/certbot
ln: failed to create symbolic link '/usr/bin/certbot': File exists
root@localhost:/etc# sudo certbot --nginx
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Please enter the domain name(s) you would like on your certificate (comma and/or
space separated) (Enter 'c' to cancel): kinmen6.com
Requesting a certificate for kinmen6.com

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/kinmen6.com-0001/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/kinmen6.com-0001/privkey.pem
This certificate expires on 2022-05-11.       
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

Deploying certificate
Successfully deployed certificate for kinmen6.com to /etc/nginx/sites-enabled/default
Congratulations! You have successfully enabled HTTPS on https://kinmen6.com 

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
- -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate       
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
- -
```




* https://hi-founder.com/p/certbot-lets-encrypt-nginx%E6%83%B3%E8%A6%81https%E5%97%8E/

```
root@localhost:/etc# sudo certbot --nginx -d kinmen6.com -d www.kinmen6.com certonly
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator nginx, Installer nginx
Enter email address (used for urgent renewal and security notices) (Enter 'c' to      
cancel): ccckmit@gmail.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
agree in order to register with the ACME server at
https://acme-v02.api.letsencrypt.org/directory
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -       
(A)gree/(C)ancel: A

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -       
Would you be willing to share your email address with the Electronic Frontier
Foundation, a founding partner of the Let's Encrypt project and the non-profit        
organization that develops Certbot? We'd like to send you email about our work        
encrypting the web, EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -       
(Y)es/(N)o: Y
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for kinmen6.com
http-01 challenge for www.kinmen6.com
Waiting for verification...
Cleaning up challenges

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/kinmen6.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/kinmen6.com/privkey.pem
   Your cert will expire on 2022-05-11. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```

* https://blog.hellojcc.tw/setup-https-with-letsencrypt-on-nginx/

* https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/