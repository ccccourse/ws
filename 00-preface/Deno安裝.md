# Deno 安裝

## Windows 安裝

在 windows 中，請先用《系統管理員身分》進行下列指令。
(用 vscode 也請按滑鼠右鍵啟動 vscode 之後才做這件事)

```
PS D:\ccc> choco install deno
Chocolatey v0.10.11
Installing the following packages:
deno
By installing you accept licenses for the packages.
Progress: Downloading deno 1.0.0... 100%

deno v1.0.0 [Approved]
deno package files install completed. Performing other installation steps.
The package deno wants to run 'chocolateyinstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[N]o/[P]rint): y

Downloading deno 64 bit
  from 'https://github.com/denoland/deno/releases/download/v1.0.0/deno-x86_64-pc-windows-msvc.zip'
Progress: 100% - Completed download of C:\Users\user\AppData\Local\Temp\chocolatey\deno\1.0.0\deno-x86_64-pc-windows-msvc.zip (14.22 MB).
Download of deno-x86_64-pc-windows-msvc.zip (14.22 MB) completed.
Hashes match.
Extracting C:\Users\user\AppData\Local\Temp\chocolatey\deno\1.0.0\deno-x86_64-pc-windows-msvc.zip to C:\ProgramData\chocolatey\lib\deno...
C:\ProgramData\chocolatey\lib\deno
Run 'deno --help' to get started
 ShimGen has successfully created a shim for deno.exe
 The install of deno was successful.
  Software installed to 'C:\ProgramData\chocolatey\lib\deno'

Chocolatey installed 1/1 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).

Enjoy using Chocolatey? Explore more amazing features to take your
experience to the next level at
 https://chocolatey.org/compare
```

## 更新版本

```
$ deno upgrade
Checking for latest version
Version has been found
Deno is upgrading to version 1.2.0
downloading https://github.com/denoland/deno/releases/download/v1.2.0/deno-x86_64-pc-windows-msvc.zip
downloading https://github-production-release-asset-2e65be.s3.amazonaws.com/133442384/53992600-c52c-11ea-8396-03c783bc0114?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20200716%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200716T104513Z&X-Amz-Expires=300&X-Amz-Signature=355f5518e47c7f05e6ddcdf37be02bb5edd4561c3508eac28d6b7bae1abb0786&X-Amz-SignedHeaders=host&actor_id=0&repo_id=133442384&response-content-disposition=attachment%3B%20filename%3Ddeno-x86_64-pc-windows-msvc.zip&response-content-type=application%2Foctet-stream
Upgrade done successfully
```


## Mac 安裝

> curl -fsSL https://deno.land/x/install/install.sh | sh

然後編輯 ~/.bash_profile 加入

```
export DENO_INSTALL="/Users/mac020/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
```

接著用 chmod 777 ~/.bash_profile

然後 deno 就可以執行成功了！

```
mac020:ccc mac020$ vim ~/.bash_profile
mac020:ccc mac020$ deno
Deno 1.0.0
exit using ctrl+d or close()

mac020:ccc mac020$ deno run https://deno.land/std/examples/welcome.ts
Download https://deno.land/std/examples/welcome.ts
Warning Implicitly using master branch https://deno.land/std/examples/welcome.ts
Compile https://deno.land/std/examples/welcome.ts
Welcome to Deno 🦕
```

## linux 安裝

* https://darryldias.me/2020/deno-on-ubuntu/
