# nohup-在登出後還繼續跑

## 使用 nohup 或 bg

Option 1: nohup // 最簡單

The best way is often the simplest.

> nohup long-running-command &

It was made specifically for this, it even logs stdout to nohup.log.

man nohup

Option 2: bg + disown

```
ctrl+z
bg
disown -h
```

If you want to "background" already running tasks, then Ctrl+Z then run bg to put your most recent suspended task to background, allowing it to continue running. disown will keep the process running after you log out. The -h flag prevents hangup.


## 使用 tmux 或 screen

* https://askubuntu.com/questions/8653/how-to-keep-processes-running-after-ending-ssh-session#

You should look for modern alternatives like tmux.

tmux is superior to screen for many reasons, here are just some examples:

Windows can be moved between session and even linked to multiple sessions
Windows can be split horizontally and vertically into panes
Support for UTF-8 and 256 colour terminals
Sessions can be controlled from the shell without the need to enter a session
Basic Functionality
To get the same functionality as explained in the answer recommending screen, you would need to do the following:

ssh into the remote machine
start tmux by typing tmux into the shell
start the process you want inside the started tmux session
leave/detach the tmux session by typing Ctrl+b and then d
You can now safely log off from the remote machine, your process will keep running inside tmux. When you come back again and want to check the status of your process you can use tmux attach to attach to your tmux session.

If you want to have multiple sessions running side-by-side, you should name each session using Ctrl+b and $. You can get a list of the currently running sessions using tmux list-sessions, now attach to a running session with command tmux attach-session -t <session-name>.

tmux can do much more advanced things than handle a single window in a single session. For more information have a look in man tmux or the tmux GitHub page. In particular, here's an FAQ about the main differences between screen and tmux.

## Forever / PM2

* https://aralroca.com/blog/from-node-to-deno

Forever and PM2 are CLI tools for ensuring that a given script runs continuously as a daemon. Unlike Forever, PM2 is more complete and also serves as load balancer. Both are very useful in Node, but can we use them in Deno?

Forever is intended for Node only, so using it is not feasible. On the other hand, with PM2 we can run non-node scripts, so we could still use it for Deno.

PM2 logo
Creating an app.sh file

```
#!/bin/bash
deno run -A myCode.ts
```

And

```
➜ pm2 start ./app.sh 
```
