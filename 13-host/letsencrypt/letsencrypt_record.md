## 申請 SSL 證書 -- Let's Encrypt

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc/course/sp (master)
$ ssh root@misavo.com
root@misavo.com's password: 
Welcome to Ubuntu 18.04.1 LTS (GNU/Linux 4.15.0-32-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Thu May 21 07:25:48 UTC 2020

  System load:  0.0                Users logged in:        0
  Usage of /:   30.9% of 24.31GB   IP address for eth0:    172.104.100.202
  Memory usage: 27%                IP address for virbr0:  192.168.122.1 
  Swap usage:   28%                IP address for docker0: 172.17.0.1    
  Processes:    103

 * MicroK8s passes 9 million downloads. Thank you to all our contributors!

     https://microk8s.io/

 * Canonical Livepatch is available for installation.
   - Reduce system reboots and improve kernel security. Activate at:     
     https://ubuntu.com/livepatch

312 packages can be updated.
188 updates are security updates.


*** System restart required ***
Last login: Fri May  8 06:46:33 2020 from 42.78.7.234
root@localhost:~# ls
ccc  site
root@localhost:~# cd site
root@localhost:~/site# pm2 list
┌──────┬────┬───────┬────────┬────────┬─────┬────────┬───────────┐
│ Name │ id │ mode  │ status │ ↺      │ cpu │ memory │
├──────┼────┼───────┼────────┼────────┼─────┼────────┼───────────┤
│ app  │ 6  │ 0.0.2 │ fork   │ online │ 26  │ 0.1%   │ 49.8 MB   │
└──────┴────┴───────┴────────┴────────┴─────┴────────┴───────────┘       
 Use `pm2 show <id|name>` to get more details about an app
root@localhost:~/site# pm2 stop app
[PM2] Applying action stopProcessId on app [app](ids: 6)
[PM2] [app](6) ✓
┌──────┬────┬───────┬────────┬─────────┬─────┬────────┬────────┐
│ Name │ id │ mode  │ status │ ↺       │ cpu │ memory │
├──────┼────┼───────┼────────┼─────────┼─────┼────────┼────────┤
│ app  │ 6  │ 0.0.2 │ fork   │ stopped │ 26  │ 0%     │ 0 B    │
└──────┴────┴───────┴────────┴─────────┴─────┴────────┴────────┘
 Use `pm2 show <id|name>` to get more details about an app
root@localhost:~/site# sudo certbot certonly --standalone
sudo: certbot: command not found
root@localhost:~/site# sudo apt-get update
Hit:1 http://mirrors.linode.com/ubuntu bionic InRelease
Get:2 http://mirrors.linode.com/ubuntu bionic-updates InRelease [88.7 kB]
Get:3 http://mirrors.linode.com/ubuntu bionic-backports InRelease [74.6 kB]
Get:4 http://mirrors.linode.com/ubuntu bionic-updates/main amd64 Packages [947 kB]
Get:5 http://mirrors.linode.com/ubuntu bionic-updates/main i386 Packages 
[683 kB]
Get:6 http://mirrors.linode.com/ubuntu bionic-updates/main Translation-en [322 kB]
Get:7 http://mirrors.linode.com/ubuntu bionic-updates/restricted amd64 Packages [54.9 kB]
Get:8 http://mirrors.linode.com/ubuntu bionic-updates/restricted Translation-en [13.7 kB]
Get:9 http://mirrors.linode.com/ubuntu bionic-updates/universe i386 Packages [1,017 kB]
Get:10 http://mirrors.linode.com/ubuntu bionic-updates/universe amd64 Packages [1,075 kB]
Get:11 http://mirrors.linode.com/ubuntu bionic-updates/universe Translation-en [334 kB]
Get:13 http://security.ubuntu.com/ubuntu bionic-security InRelease [88.7 
kB]
Hit:14 http://ppa.launchpad.net/team-gcc-arm-embedded/ppa/ubuntu bionic InRelease
Get:12 https://apt.llvm.org/bionic llvm-toolchain-bionic-10 InRelease [4,232 B]
Get:15 http://security.ubuntu.com/ubuntu bionic-security/main i386 Packages [470 kB]
Hit:16 https://deb.nodesource.com/node_11.x bionic InRelease
Get:17 https://apt.llvm.org/bionic llvm-toolchain-bionic-10/main amd64 Packages [8,765 B]
Get:18 https://apt.llvm.org/bionic llvm-toolchain-bionic-10/main i386 Packages [1,595 B]
Get:19 http://security.ubuntu.com/ubuntu bionic-security/main amd64 Packages [720 kB]
Get:20 http://security.ubuntu.com/ubuntu bionic-security/main Translation-en [227 kB]
Get:21 http://security.ubuntu.com/ubuntu bionic-security/restricted amd64 Packages [43.5 kB]
Get:22 http://security.ubuntu.com/ubuntu bionic-security/restricted Translation-en [10.8 kB]
Get:23 http://security.ubuntu.com/ubuntu bionic-security/universe amd64 Packages [666 kB]
Get:24 http://security.ubuntu.com/ubuntu bionic-security/universe Translation-en [221 kB]
Fetched 7,072 kB in 3s (2,410 kB/s)
Reading package lists... Done
root@localhost:~/site# sudo apt-get install software-properties-common
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following additional packages will be installed:
  python3-software-properties
The following packages will be upgraded:
  python3-software-properties software-properties-common
2 upgraded, 0 newly installed, 0 to remove and 301 not upgraded.
Need to get 33.6 kB of archives.
After this operation, 13.3 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.linode.com/ubuntu bionic-updates/main amd64 software-properties-common all 0.96.24.32.12 [10.0 kB]
Get:2 http://mirrors.linode.com/ubuntu bionic-updates/main amd64 python3-software-properties all 0.96.24.32.12 [23.6 kB]
Fetched 33.6 kB in 0s (2,777 kB/s)
(Reading database ... 164267 files and directories currently installed.)
Preparing to unpack .../software-properties-common_0.96.24.32.12_all.deb 
...
Unpacking software-properties-common (0.96.24.32.12) over (0.96.24.32.4) 
...
Preparing to unpack .../python3-software-properties_0.96.24.32.12_all.deb ...
Unpacking python3-software-properties (0.96.24.32.12) over (0.96.24.32.4) ...
Processing triggers for man-db (2.8.3-2) ...
Setting up python3-software-properties (0.96.24.32.12) ...
Processing triggers for dbus (1.12.2-1ubuntu1) ...
Setting up software-properties-common (0.96.24.32.12) ...
root@localhost:~/site# sudo add-apt-repository ppa:certbot/certbot
 This is the PPA for packages prepared by Debian Let's Encrypt Team and backported for Ubuntu.

Note: Packages are only provided for currently supported Ubuntu releases.
 More info: https://launchpad.net/~certbot/+archive/ubuntu/certbot
Press [ENTER] to continue or Ctrl-c to cancel adding it.

Hit:1 http://mirrors.linode.com/ubuntu bionic InRelease
Hit:2 http://mirrors.linode.com/ubuntu bionic-updates InRelease
Hit:3 http://mirrors.linode.com/ubuntu bionic-backports InRelease       
Hit:4 https://deb.nodesource.com/node_11.x bionic InRelease
Get:5 http://ppa.launchpad.net/certbot/certbot/ubuntu bionic InRelease [21.3 kB]
Hit:7 http://security.ubuntu.com/ubuntu bionic-security InRelease        
Hit:8 http://ppa.launchpad.net/team-gcc-arm-embedded/ppa/ubuntu bionic InRelease
Hit:6 https://apt.llvm.org/bionic llvm-toolchain-bionic-10 InRelease    
Get:9 http://ppa.launchpad.net/certbot/certbot/ubuntu bionic/main amd64 Packages [8,032 B]
Get:10 http://ppa.launchpad.net/certbot/certbot/ubuntu bionic/main i386 Packages [8,028 B]
Get:11 http://ppa.launchpad.net/certbot/certbot/ubuntu bionic/main Translation-en [4,176 B]
Fetched 41.5 kB in 2s (17.2 kB/s)
Reading package lists... Done
root@localhost:~/site# sudo add-apt-repository universe
'universe' distribution component enabled for all sources.
Hit:1 http://mirrors.linode.com/ubuntu bionic InRelease
Hit:2 http://mirrors.linode.com/ubuntu bionic-updates InRelease
Hit:3 http://mirrors.linode.com/ubuntu bionic-backports InRelease        
Hit:4 https://deb.nodesource.com/node_11.x bionic InRelease
Hit:6 http://ppa.launchpad.net/certbot/certbot/ubuntu bionic InRelease   
Hit:7 http://security.ubuntu.com/ubuntu bionic-security InRelease        
Get:8 http://archive.ubuntu.com/ubuntu bionic InRelease [242 kB]        
Hit:5 https://apt.llvm.org/bionic llvm-toolchain-bionic-10 InRelease     
Hit:9 http://ppa.launchpad.net/team-gcc-arm-embedded/ppa/ubuntu bionic InRelease
Get:10 http://archive.ubuntu.com/ubuntu bionic/universe amd64 Packages [8,570 kB]
Get:11 http://archive.ubuntu.com/ubuntu bionic/universe i386 Packages [8,531 kB]
Get:12 http://archive.ubuntu.com/ubuntu bionic/universe Translation-en [4,941 kB]
Fetched 22.3 MB in 8s (2,946 kB/s)
Reading package lists... Done
root@localhost:~/site# sudo apt-get update
Hit:1 http://mirrors.linode.com/ubuntu bionic InRelease
Hit:2 http://mirrors.linode.com/ubuntu bionic-updates InRelease
Hit:3 http://mirrors.linode.com/ubuntu bionic-backports InRelease        
Hit:4 https://deb.nodesource.com/node_11.x bionic InRelease
Hit:6 http://archive.ubuntu.com/ubuntu bionic InRelease                  
Hit:7 http://ppa.launchpad.net/certbot/certbot/ubuntu bionic InRelease   
Hit:8 http://security.ubuntu.com/ubuntu bionic-security InRelease       
Hit:5 https://apt.llvm.org/bionic llvm-toolchain-bionic-10 InRelease    
Hit:9 http://ppa.launchpad.net/team-gcc-arm-embedded/ppa/ubuntu bionic InRelease
Reading package lists... Done
root@localhost:~/site# sudo apt-get install certbot
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following additional packages will be installed:
  python3-acme python3-certbot python3-configargparse python3-future     
  python3-icu python3-josepy python3-mock python3-ndg-httpsclient        
  python3-parsedatetime python3-pbr python3-requests-toolbelt
  python3-rfc3339 python3-tz python3-zope.component python3-zope.event   
  python3-zope.hookable
Suggested packages:
  python3-certbot-apache python3-certbot-nginx python-certbot-doc
  python-acme-doc python-future-doc python-mock-doc
The following NEW packages will be installed:
  certbot python3-acme python3-certbot python3-configargparse
  python3-future python3-icu python3-josepy python3-mock
  python3-ndg-httpsclient python3-parsedatetime python3-pbr
  python3-requests-toolbelt python3-rfc3339 python3-tz
  python3-zope.component python3-zope.event python3-zope.hookable
0 upgraded, 17 newly installed, 0 to remove and 303 not upgraded.        
Need to get 1,113 kB of archives.
After this operation, 5,884 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.linode.com/ubuntu bionic/main amd64 python3-pbr all 
3.1.1-3ubuntu3 [53.8 kB]
Get:2 http://mirrors.linode.com/ubuntu bionic/universe amd64 python3-mock all 2.0.0-3 [47.5 kB]
Get:3 http://mirrors.linode.com/ubuntu bionic/main amd64 python3-tz all 2018.3-2 [25.1 kB]
Get:4 http://mirrors.linode.com/ubuntu bionic/main amd64 python3-rfc3339 
all 1.0-4 [6,356 B]
Get:5 http://mirrors.linode.com/ubuntu bionic/universe amd64 python3-ndg-httpsclient all 0.4.4-1 [23.5 kB]
Get:6 http://mirrors.linode.com/ubuntu bionic/universe amd64 python3-configargparse all 0.11.0-1 [22.4 kB]
Get:7 http://mirrors.linode.com/ubuntu bionic/universe amd64 python3-zope.event all 4.2.0-1 [7,402 B]
Get:8 http://mirrors.linode.com/ubuntu bionic/main amd64 python3-icu amd64 1.9.8-0ubuntu1 [173 kB]
Get:9 http://ppa.launchpad.net/certbot/certbot/ubuntu bionic/main amd64 python3-josepy all 1.1.0-2+ubuntu18.04.1+certbot+1 [27.8 kB]
Get:10 http://ppa.launchpad.net/certbot/certbot/ubuntu bionic/main amd64 
python3-requests-toolbelt all 0.8.0-1+ubuntu18.04.1+certbot+1 [38.3 kB]  
Get:11 http://ppa.launchpad.net/certbot/certbot/ubuntu bionic/main amd64 
python3-acme all 0.31.0-2+ubuntu18.04.3+certbot+2 [50.7 kB]
Get:12 http://ppa.launchpad.net/certbot/certbot/ubuntu bionic/main amd64 
python3-future all 0.15.2-4+ubuntu18.04.1+certbot+3 [333 kB]
Get:13 http://ppa.launchpad.net/certbot/certbot/ubuntu bionic/main amd64 
python3-parsedatetime all 2.4-3+ubuntu18.04.1+certbot+3 [32.4 kB]        
Get:14 http://ppa.launchpad.net/certbot/certbot/ubuntu bionic/main amd64 
python3-zope.hookable amd64 4.0.4-4+ubuntu18.04.1+certbot+1 [9,532 B]    
Get:15 http://ppa.launchpad.net/certbot/certbot/ubuntu bionic/main amd64 
python3-zope.component all 4.3.0-1+ubuntu18.04.1+certbot+3 [43.1 kB]     
Get:16 http://ppa.launchpad.net/certbot/certbot/ubuntu bionic/main amd64 
python3-certbot all 0.31.0-1+ubuntu18.04.1+certbot+1 [208 kB]
Get:17 http://ppa.launchpad.net/certbot/certbot/ubuntu bionic/main amd64 
certbot all 0.31.0-1+ubuntu18.04.1+certbot+1 [11.0 kB]
Fetched 1,113 kB in 8s (141 kB/s)
Selecting previously unselected package python3-josepy.
(Reading database ... 164269 files and directories currently installed.)
Preparing to unpack .../00-python3-josepy_1.1.0-2+ubuntu18.04.1+certbot+1_all.deb ...
Unpacking python3-josepy (1.1.0-2+ubuntu18.04.1+certbot+1) ...
Selecting previously unselected package python3-pbr.
Preparing to unpack .../01-python3-pbr_3.1.1-3ubuntu3_all.deb ...
Unpacking python3-pbr (3.1.1-3ubuntu3) ...
Selecting previously unselected package python3-mock.
Preparing to unpack .../02-python3-mock_2.0.0-3_all.deb ...
Unpacking python3-mock (2.0.0-3) ...
Selecting previously unselected package python3-requests-toolbelt.
Preparing to unpack .../03-python3-requests-toolbelt_0.8.0-1+ubuntu18.04.1+certbot+1_all.deb ...
Unpacking python3-requests-toolbelt (0.8.0-1+ubuntu18.04.1+certbot+1) ...
Selecting previously unselected package python3-tz.
Preparing to unpack .../04-python3-tz_2018.3-2_all.deb ...
Unpacking python3-tz (2018.3-2) ...
Selecting previously unselected package python3-rfc3339.
Preparing to unpack .../05-python3-rfc3339_1.0-4_all.deb ...
Unpacking python3-rfc3339 (1.0-4) ...
Selecting previously unselected package python3-acme.
Preparing to unpack .../06-python3-acme_0.31.0-2+ubuntu18.04.3+certbot+2_all.deb ...
Unpacking python3-acme (0.31.0-2+ubuntu18.04.3+certbot+2) ...
Selecting previously unselected package python3-ndg-httpsclient.
Preparing to unpack .../07-python3-ndg-httpsclient_0.4.4-1_all.deb ...
Unpacking python3-ndg-httpsclient (0.4.4-1) ...
Selecting previously unselected package python3-configargparse.
Preparing to unpack .../08-python3-configargparse_0.11.0-1_all.deb ...   
Unpacking python3-configargparse (0.11.0-1) ...
Selecting previously unselected package python3-future.
Preparing to unpack .../09-python3-future_0.15.2-4+ubuntu18.04.1+certbot+3_all.deb ...
Unpacking python3-future (0.15.2-4+ubuntu18.04.1+certbot+3) ...
Selecting previously unselected package python3-parsedatetime.
Preparing to unpack .../10-python3-parsedatetime_2.4-3+ubuntu18.04.1+certbot+3_all.deb ...
Unpacking python3-parsedatetime (2.4-3+ubuntu18.04.1+certbot+3) ...
Selecting previously unselected package python3-zope.hookable.
Preparing to unpack .../11-python3-zope.hookable_4.0.4-4+ubuntu18.04.1+certbot+1_amd64.deb ...
Unpacking python3-zope.hookable (4.0.4-4+ubuntu18.04.1+certbot+1) ...    
Selecting previously unselected package python3-zope.event.
Preparing to unpack .../12-python3-zope.event_4.2.0-1_all.deb ...
Unpacking python3-zope.event (4.2.0-1) ...
Selecting previously unselected package python3-zope.component.
Preparing to unpack .../13-python3-zope.component_4.3.0-1+ubuntu18.04.1+certbot+3_all.deb ...
Unpacking python3-zope.component (4.3.0-1+ubuntu18.04.1+certbot+3) ...   
Selecting previously unselected package python3-certbot.
Preparing to unpack .../14-python3-certbot_0.31.0-1+ubuntu18.04.1+certbot+1_all.deb ...
Unpacking python3-certbot (0.31.0-1+ubuntu18.04.1+certbot+1) ...
Selecting previously unselected package certbot.
Preparing to unpack .../15-certbot_0.31.0-1+ubuntu18.04.1+certbot+1_all.deb ...
Unpacking certbot (0.31.0-1+ubuntu18.04.1+certbot+1) ...
Selecting previously unselected package python3-icu.
Preparing to unpack .../16-python3-icu_1.9.8-0ubuntu1_amd64.deb ...      
Unpacking python3-icu (1.9.8-0ubuntu1) ...
Setting up python3-requests-toolbelt (0.8.0-1+ubuntu18.04.1+certbot+1) ...
Setting up python3-pbr (3.1.1-3ubuntu3) ...
update-alternatives: using /usr/bin/python3-pbr to provide /usr/bin/pbr (pbr) in auto mode
Setting up python3-mock (2.0.0-3) ...
Setting up python3-zope.event (4.2.0-1) ...
Setting up python3-icu (1.9.8-0ubuntu1) ...
Setting up python3-configargparse (0.11.0-1) ...
Setting up python3-zope.hookable (4.0.4-4+ubuntu18.04.1+certbot+1) ...   
Setting up python3-future (0.15.2-4+ubuntu18.04.1+certbot+3) ...
update-alternatives: using /usr/bin/python3-futurize to provide /usr/bin/futurize (futurize) in auto mode
update-alternatives: using /usr/bin/python3-pasteurize to provide /usr/bin/pasteurize (pasteurize) in auto mode
Processing triggers for man-db (2.8.3-2) ...
Setting up python3-ndg-httpsclient (0.4.4-1) ...
Setting up python3-josepy (1.1.0-2+ubuntu18.04.1+certbot+1) ...
Setting up python3-tz (2018.3-2) ...
Setting up python3-parsedatetime (2.4-3+ubuntu18.04.1+certbot+3) ...     
Setting up python3-rfc3339 (1.0-4) ...
Setting up python3-zope.component (4.3.0-1+ubuntu18.04.1+certbot+3) ...
Setting up python3-acme (0.31.0-2+ubuntu18.04.3+certbot+2) ...
Setting up python3-certbot (0.31.0-1+ubuntu18.04.1+certbot+1) ...
Setting up certbot (0.31.0-1+ubuntu18.04.1+certbot+1) ...
Created symlink /etc/systemd/system/timers.target.wants/certbot.timer → /lib/systemd/system/certbot.timer.
certbot.service is a disabled or a static unit, not starting it.
root@localhost:~/site# sudo certbot certonly --standalone
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator standalone, Installer None
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
Please enter in your domain name(s) (comma and/or space separated)  (Enter 'c'
to cancel): misavo.com
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for misavo.com
Waiting for verification...
Cleaning up challenges

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


```


```
PS D:\ccc\ccc109\se\deno\alg\00-complexity\bigO> ssh root@misavo.com
root@misavo.com's password:
Welcome to Ubuntu 18.04.1 LTS (GNU/Linux 4.15.0-32-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Tue Sep 15 09:27:35 UTC 2020

  System load:  0.02               Users logged in:        0
  Usage of /:   80.5% of 24.31GB   IP address for eth0:    172.104.100.202
  Memory usage: 29%                IP address for virbr0:  192.168.122.1
  Swap usage:   41%                IP address for docker0: 172.17.0.1
  Processes:    116

 * Kubernetes 1.19 is out! Get it in one command with:

     sudo snap install microk8s --channel=1.19 --classic

   https://microk8s.io/ has docs and details.

 * Canonical Livepatch is available for installation.
   - Reduce system reboots and improve kernel security. Activate at:
     https://ubuntu.com/livepatch

367 packages can be updated.
243 updates are security updates.


*** System restart required ***
Last login: Mon Jul  6 06:08:24 2020 from 42.70.208.16
root@localhost:~# cd site
root@localhost:~/site# ls
app  backup  doc  package-lock.json  root
root@localhost:~/site# pm2 list
┌──────────┬────┬─────────┬──────┬───────┬────────┬─────────┬────────┬──────┬───────────┬──────┬──────────┐
│ App name │ id │ version │ mode │ pid   │ status │ restart │ uptime │ cpu  │ mem       │ user │ watching │    
├──────────┼────┼─────────┼──────┼───────┼────────┼─────────┼────────┼──────┼───────────┼──────┼──────────┤    
│ app      │ 6  │ 0.0.2   │ fork │ 25460 │ online │ 28      │ 2M     │ 0.1% │ 49.5 MB   │ root │ disabled │    
└──────────┴────┴─────────┴──────┴───────┴────────┴─────────┴────────┴──────┴───────────┴──────┴──────────┘    
 Use `pm2 show <id|name>` to get more details about an app
root@localhost:~/site# pm2 stop app
[PM2] Applying action stopProcessId on app [app](ids: 6)
[PM2] [app](6) ✓
┌──────────┬────┬─────────┬──────┬─────┬─────────┬─────────┬────────┬─────┬────────┬──────┬──────────┐
│ App name │ id │ version │ mode │ pid │ status  │ restart │ uptime │ cpu │ mem    │ user │ watching │
├──────────┼────┼─────────┼──────┼─────┼─────────┼─────────┼────────┼─────┼────────┼──────┼──────────┤
│ app      │ 6  │ 0.0.2   │ fork │ 0   │ stopped │ 28      │ 0      │ 0%  │ 0 B    │ root │ disabled │
└──────────┴────┴─────────┴──────┴─────┴─────────┴─────────┴────────┴─────┴────────┴──────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
root@localhost:~/site# sudo certbot certonly --standalone
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator standalone, Installer None
Please enter in your domain name(s) (comma and/or space separated)  (Enter 'c'
to cancel): misavo.com
Cert is due for renewal, auto-renewing...
Renewing an existing certificate
Performing the following challenges:
http-01 challenge for misavo.com
Waiting for verification...
Cleaning up challenges

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/misavo.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/misavo.com/privkey.pem
   Your cert will expire on 2020-12-14. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le

root@localhost:~/site# pm2 start app
[PM2] Applying action restartProcessId on app [app](ids: 6)
[PM2] [app](6) ✓
[PM2] Process successfully started
┌──────────┬────┬─────────┬──────┬───────┬────────┬─────────┬────────┬─────┬──────────┬──────┬──────────┐
│ App name │ id │ version │ mode │ pid   │ status │ restart │ uptime │ cpu │ mem      │ user │ watching │      
├──────────┼────┼─────────┼──────┼───────┼────────┼─────────┼────────┼─────┼──────────┼──────┼──────────┤
│ app      │ 6  │ 0.0.2   │ fork │ 31647 │ online │ 28      │ 0s     │ 0%  │ 8.8 MB   │ root │ disabled │      
└──────────┴────┴─────────┴──────┴───────┴────────┴─────────┴────────┴─────┴──────────┴──────┴──────────┘      
 Use `pm2 show <id|name>` to get more details about an app
```

