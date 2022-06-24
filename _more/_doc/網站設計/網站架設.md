# 網站架設

請用 mdServer 範例來測試您的架設是否成功！

## 架設在本機 localhost

如果你有對外 IP ，只要打入該 IP 就可以看到此網站。

## 用 ngrok 架設臨時測試用網站

* 適合測試時使用，或者你不想花錢時可以用這種模式 (但只能臨時用，不適合永久架站)
* [測試 webhook 不再煩惱：ngrok](https://blog.techbridge.cc/2018/05/24/ngrok/)
* [怎麼將內網的 localhost 讓外面的人都看得到呢？用用 ngrok 吧！](https://tenten.co/blog/how-to-use-ngrok-to-connect-your-localhost/)

老師的使用範例： 執行以下指令

```
ngrok http 3000 
```

完成後會出現下列畫面

```

ngrok by @inconshreveable                                                                                         (Ctrl+C to quit)
Session Status                online
Session Expires               7 hours, 58 minutes
Update                        update available (version 2.3.34, Ctrl-U to update)
Version                       2.2.8
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://0156480c.ngrok.io -> localhost:3000
Forwarding                    https://0156480c.ngrok.io -> localhost:3000

Connections                   ttl     opn     rt1     rt5     p50     p90     
                              3       0       0.02    0.01    2.06    2.48    
```

然後檢視 http://0156480c.ngrok.io/README.md 就會看到你個網站呈現 README.md 的結果。

就算你用另一台電腦，或者是手機檢視，一樣可以正常運作！


## 用 github 架設前端網站

* 這種方式不能有 server 端程式，只能是《前端》型的網頁 (裏面可以有 CSS+JS 程式)
* 因為 server 端是 github 的 gh-pages 平台。

## 用雲端平台 (例如 linode) 架設網站

這種方式可以架 server 端程式，但是需要花點錢。

1. linode, digital ocean, vultr 都有每個月五美元的方案
    * 我申請的一個 linode 虛擬主機 IP 為 172.104.100.202
2. 亞馬遜 EC2, Google Cloud Platform (GCP), 微軟 Azure 都有無限量方案，但是按流量付費。
3. 免費的通常很多問題與限制，不建議使用！


```
PS D:\ccc\course\ws\code\02-koa\01-hello> ping misavo.com

Ping misavo.com [172.104.100.202] (使用 32 位元組的資料):
回覆自 172.104.100.202: 位元組=32 時間=67ms TTL=50
回覆自 172.104.100.202: 位元組=32 時間=63ms TTL=50

172.104.100.202 的 Ping 統計資料:
    封包: 已傳送 = 2，已收到 = 2, 已遺失 = 0 (0% 遺失)，
大約的來回時間 (毫秒):
    最小值 = 63ms，最大值 = 67ms，平均 = 65ms
```

## Domain Name 的申請

* 我習慣向 gandi.net 申請 domain name
    * https://www.gandi.net/zh-hant
* 例如我在 gandi 設定將 misavo.com 對應到 172.104.100.202，於是你可以用下列兩個方式存取該網站。
    * http://misavo.com
    * http://172.104.100.202/

## https 與證書

* http 協定沒有加密過，所以在網路上封包被擷取就會全部曝光 (包含帳號密碼) ，非常不安全
* 所以需要用 https 進行 SSL 加密，這樣資訊才不容易被竊取！
* 加密需要有 SSL 證書，證書的取得有幾種方式：
    * 自行產生 : 例如用 openssl 產生 (但是自行產生的證書沒有經過認證機構認證，所以瀏覽器會顯示紅色警告訊息)
    * 購買證書 : 有很多商業網站，像是 gandi, godaddy ... 都有販賣證書。
    * 使用免費版: SSLforFree, LetsEncrypt 都有免費的證書可以申請，但是通常三個月就要更新一次。

## Node.js server 使用證書

* Node.js 要使用 https ssl 加密，必須加載證書並使用 https 模組。
    * 這是我認為比較容易使用的方法。
* 也可以在 Node.js 前面使用 apache 或 nginx ，處理掉認證解碼的工作，這樣 node.js 就不需要寫 https 的功能。
    * 但是 nginx, apache 的設定常常反而更麻煩，我暫時不推薦這個方法。

## 架設永久性 server

* 最好使用 pm2 來啟動 server ，這樣萬一 server 當掉， pm2 會自行重新啟動，不會死機！
    * 也可以用 forever 取代 pm2 ，但是 pm2 現在比較多人用。
