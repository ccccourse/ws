# letsencrypt

## certbot

* https://certbot.eff.org/lets-encrypt/ubuntubionic-other

1- SSH into the server
2- Add Certbot PPA

```
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository universe
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
```

3 - Install Certbot

```
sudo apt-get install certbot
```

4 - Choose how you'd like to run Certbot

```
sudo certbot certonly --standalone
```

5 - Install your certificate

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:       
   /etc/letsencrypt/live/misavo.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/misavo.com/privkey.pem
   Your cert will expire on 2020-08-19. To obtain a new or tweaked
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

6 - Test automatic renewal

The Certbot packages on your system come with a cron job or systemd timer that will renew your certificates automatically before they expire. You will not need to run Certbot again, unless you change your configuration. You can test automatic renewal for your certificates by running this command:

sudo certbot renew --dry-run
The command to renew certbot is installed in one of the following locations:

/etc/crontab/
/etc/cron.*/*
systemctl list-timers
If you needed to stop your webserver to run Certbot, you'll want to add hook scripts to stop and start your webserver automatically. For example, if your webserver is HAProxy, run the following commands:

官方說明

```
sudo sh -c 'printf "#!/bin/sh\nservice haproxy stop\n" > /etc/letsencrypt/renewal-hooks/pre/haproxy.sh'
sudo sh -c 'printf "#!/bin/sh\nservice haproxy start\n" > /etc/letsencrypt/renewal-hooks/post/haproxy.sh'
sudo chmod 755 /etc/letsencrypt/renewal-hooks/pre/haproxy.sh
sudo chmod 755 /etc/letsencrypt/renewal-hooks/post/haproxy.sh
More information is available in the Certbot documentation on renewing certificates.

```

我的作法

```
root@localhost:~/site# sudo sh -c 'printf "#!/bin/sh\npm2 stop app\n" > /etc/letsencrypt/renewal-hooks/pre/appstop.sh'
root@localhost:~/site# sudo sh -c 'printf "#!/bin/sh\npm2 start app\n" > /etc/letsencrypt/renewal-hooks/post/appstart.sh'      
root@localhost:~/site# sudo chmod 755 /etc/letsencrypt/renewal-hooks/pre/appstop.sh
root@localhost:~/site# sudo chmod 755 /etc/letsencrypt/renewal-hooks/pre/appstart.sh
chmod: cannot access '/etc/letsencrypt/renewal-hooks/pre/appstart.sh': No such file or directory
root@localhost:~/site# sudo chmod 755 /etc/letsencrypt/renewal-hooks/post/appstart.sh
```
