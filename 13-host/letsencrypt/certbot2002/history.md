2040  pm2 stop run
 2041  sudo apt-get update
 2042  sudo apt-get install software-properties-common
 2043  sudo add-apt-repository ppa:certbot/certbot
 2044  sudo apt-get update
 2045  sudo apt-get install python-certbot-nginx
 2046  whereis nginx
 2047  cd /etc/nginx
 2048  ls
 2049  vim nginx.conf
 2050  cd conf.d
 2051  ls
 2052  vim www.kinmen6.com.conf
 2053  nginx -t && nginx -s reload
 2054  ls /etc/nginx/sites-enabled/
 2055  ls /etc/nginx/sites-enabled/default
 2056  vim /etc/nginx/sites-enabled/default
 2057  ls
 2058  rm www.kinmen6.com.conf
 2059  nginx -t && nginx -s reload
 2060  cd ..
 2061  cd sites-enabled
 2062  ls
 2063  vim default
 2064  sudo certbot --nginx -d kinmen6.com -d www.kinmen6.com certonly      
 2065  cd ..
 2066  ls
 2067  cd conf.d
 2068  ls
 2069  cd /etc/letsencrypt/
 2070  ls
 2071  cd ..
 2072  rm -rf letsencrypt
 2073  ls
 2074  sudo certbot --nginx -d kinmen6.com -d www.kinmen6.com certonly      
 2075  cd nginx
 2076  ls
 2077  cd conf.d
 2078  ls
 2079  cd ..
 2080  ls
 2081  ls sites-enabled/
 2082  ls sites-available/
 2083  cd sites-enabled/
 2084  ls
 2085  vim default
 2086  sudo snap install core; sudo snap refresh core
 2087  sudo apt-get remove certbot
 2088  sudo snap install --classic certbot
 2089  sudo ln -s /snap/bin/certbot /usr/bin/certbot
 2090  cd ..
 2091  sudo apt-get install nginx
 2092  sudo /etc/init.d/nginx restart
 2093  ls
 2094  ls nginx
 2095  whereis nginx
 2096  sudo apt-get remove nginx nginx-common
 2097  whereis nginx
 2098  sudo apt-get install nginx
 2099  sudo /etc/init.d/nginx restart
 2100  sudo snap install --classic certbot
 2101  sudo ln -s /snap/bin/certbot /usr/bin/certbot
 2102  sudo certbot --nginx
 2103  sudo certbot renew --dry-run
 2104  sudo certbot --nginx
 2105  sudo certbot renew --dry-run
 2106  ls
 2107  cd nginx
 2108  ls
 2109  ls sites-enabled/
 2110  ls conf.d
 2111  ls sites-enabled/
 2112  cd sites-enabled/
 2113  ls
 2114  vim default
 2115  ls
 2116  cd /
 2117  ls
 2118  cd root
 2119  ls
 2120  cd pub6
 2121  ls
 2122  cat pm2run.sh
 2123  cat run.sh
 2124  vim run.sh
 2125  ./run.sh
 2126  vim run.sh
 2127  ./run.sh
 2128  cat pm2run.sh
 2129  pm2 list
 2130  pm2 delete run
 2131  ls
 2132  ./pm2run.sh
 2133  vim /etc/nginx/sites-enabled/default.conf
 2134  cd /etc/
 2135  ls
 2136  cd nginx
 2137  ls
 2138  cd sites-enabled
 2139  ls
 2140  vim default
 2141  sudo service nginx reload
 2142  vim default
 2143  sudo service nginx reload
 2144  vim default
 2145  sudo service nginx reload
 2146  history