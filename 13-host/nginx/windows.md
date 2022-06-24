# windows

在 windows 上，只要下載後解開，然後會有一個 nginx.exe，直接在 powershell 下 start nginx 啟動就可以了！

參考 -- http://nginx.org/en/docs/windows.html

```
PS D:\install\nginx-1.19.7> start nginx.exe
PS D:\install\nginx-1.19.7> ls


    目錄: D:\install\nginx-1.19.7


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----       2021/2/22  下午 09:25                conf
d-----       2021/2/16  下午 11:59                contrib
d-----       2021/2/16  下午 11:59                docs
d-----       2021/2/22  下午 09:49                html
d-----       2021/2/22  下午 08:09                logs
d-----       2021/2/16  下午 11:59                temp
-a----       2021/2/16  下午 10:13        3743744 nginx.exe
```

其中 conf 裡有 nginx.conf，是設定檔，可以修改之。

網頁預設放在 html 裡面。
