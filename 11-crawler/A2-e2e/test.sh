deno run -A app.js&
appId=$!
echo 'appId=', $appId
sleep 5
deno test -A --unstable deno_test.js
kill $appId
