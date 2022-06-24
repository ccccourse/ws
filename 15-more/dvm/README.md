# dvm

## windows

```
$ iwr https://deno.land/x/dvm/install.ps1 -useb | iex

PS D:\ccc> iwr https://deno.land/x/dvm/install.ps1 -useb | iex
Dvm was installed successfully to C:\Users\E320-teacher\.dvm\bin\dvm.exe
Run 'dvm --help' to get started
PS D:\ccc> dvm install 1.15.0
downloading https://dl.deno.land/release/v1.15.0/deno-x86_64-pc-windows-msvc.zip
Version has been found
Deno v1.15.0 has been downloaded
Now using deno 1.15.0
PS D:\ccc> deno --version
deno 1.15.0 (release, x86_64-pc-windows-msvc)
v8 9.5.172.19
typescript 4.4.2
```



## mac

```
  496  curl -fsSL https://deno.land/x/dvm/install.sh | sh
  497  source /Users/csienqu/.bash_profile
  499  dvm
  500  deno --version
  506  dvm install 1.15.0
  508  deno --version
  503  deno run -A oakHello.js
```