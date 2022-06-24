# Let's Encrypt -- CertBot

## 更新

```
 1992  pm2 list
 1993  pm2 stop pmediaApp
 1994  sudo certbot renew --dry-run
 1995  sudo certbot renew
 1996  pm2 start pmediaApp
 1997  history
```

## 認證

```
root@localhost:~/site# sudo certbot certonly --standalone
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator standalone, Installer None
Please enter in your domain name(s) (comma and/or space separated)  (Enter 'c'
to cancel): programmermedia.org
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for programmermedia.org
Waiting for verification...
Cleaning up challenges

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/programmermedia.org/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/programmermedia.org/privkey.pem
   Your cert will expire on 2021-05-16. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```

## renew test

* /etc/letsencrypt/renewal-hooks/pre/appstop.sh

```
#!/bin/sh
pm2 stop app
```

* /etc/letsencrypt/renewal-hooks/post/appstart.sh

```
#!/bin/sh
pm2 start app
```




```
root@localhost:~/site# sudo certbot renew --dry-run
Saving debug log to /var/log/letsencrypt/letsencrypt.log

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Processing /etc/letsencrypt/renewal/misavo.com.conf
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Cert is due for renewal, auto-renewing...
Plugins selected: Authenticator standalone, Installer None
Running pre-hook command: /etc/letsencrypt/renewal-hooks/pre/appstop.sh
Output from appstop.sh:
[PM2] Applying action stopProcessId on app [app](ids: 6)
[PM2] [app](6) ✓
┌──────────┬────┬─────────┬──────┬─────┬─────────┬─────────┬────────┬─────┬────────┬──────┬──────────┐
│ App name │ id │ version │ mode │ pid │ status  │ restart │ uptime │ cpu │ mem    │ user │ watching │
├──────────┼────┼─────────┼──────┼─────┼─────────┼─────────┼────────┼─────┼────────┼──────┼──────────┤
│ app      │ 6  │ 0.0.2   │ fork │ 0   │ stopped │ 60      │ 0      │ 0%  │ 0 B    │ root │ disabled │
└──────────┴────┴─────────┴──────┴─────┴─────────┴─────────┴────────┴─────┴────────┴──────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app

Renewing an existing certificate
Performing the following challenges:
http-01 challenge for misavo.com
Waiting for verification...
Cleaning up challenges

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
new certificate deployed without reload, fullchain is
/etc/letsencrypt/live/misavo.com/fullchain.pem
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Processing /etc/letsencrypt/renewal/programmermedia.org.conf
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Cert not due for renewal, but simulating renewal for dry run
Plugins selected: Authenticator standalone, Installer None
Pre-hook command already run, skipping: /etc/letsencrypt/renewal-hooks/pre/appstop.sh
Renewing an existing certificate
Performing the following challenges:
http-01 challenge for programmermedia.org
Waiting for verification...
Cleaning up challenges

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
new certificate deployed without reload, fullchain is
/etc/letsencrypt/live/programmermedia.org/fullchain.pem
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
** DRY RUN: simulating 'certbot renew' close to cert expiry
**          (The test certificates below have not been saved.)

Congratulations, all renewals succeeded. The following certs have been renewed:
  /etc/letsencrypt/live/misavo.com/fullchain.pem (success)
  /etc/letsencrypt/live/programmermedia.org/fullchain.pem (success)
** DRY RUN: simulating 'certbot renew' close to cert expiry
**          (The test certificates above have not been saved.)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Running post-hook command: /etc/letsencrypt/renewal-hooks/post/appstart.sh
Output from appstart.sh:
[PM2] Applying action restartProcessId on app [app](ids: 6)
[PM2] [app](6) ✓
[PM2] Process successfully started
┌──────────┬────┬─────────┬──────┬─────┬────────┬─────────┬────────┬─────┬───────────┬──────┬──────────┐
│ App name │ id │ version │ mode │ pid │ status │ restart │ uptime │ cpu │ mem       │ user │ watching │
├──────────┼────┼─────────┼──────┼─────┼────────┼─────────┼────────┼─────┼───────────┼──────┼──────────┤
│ app      │ 6  │ N/A     │ fork │ 921 │ online │ 60      │ 0s     │ 0%  │ 11.3 MB   │ root │ disabled │
└──────────┴────┴─────────┴──────┴─────┴────────┴─────────┴────────┴─────┴───────────┴──────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
```

