## IPFSの準備
```
$ brew install ipfs
$ ipfs init
$ ./save_on_ipfs.sh
$ ipfs daemon
```

```
added QmRWSKSZVVkvQsnE4V6kavKoAMabHBDJM29EPstzq4cCtQ predict_row.py
added QmeTKajqCKFoKUmWEj8h2ACiG9BUDKPPNYiLBoup1Uewuf row_data0.txt
added Qmef2eXa2JnpXhD6W92ciThVyK8uE3gZPvqaNjxhM6uBtF row_data1.txt
added QmS3LsDpJMfKGAGkwZJ853mgvbbX1xjXRbHkM3uaiMnGHt row_data2.txt
added QmWNsqYJNSW5rsXt2iqL8Gq1Fx5BYNjR8NzuLSNwEgvdyd row_data3.txt
added QmRBxkR6nsrko6qdprbLttz2hzeFo3ibuPS5nkCSH2yzaA row_data4.txt
added QmPHPHeVmmtpCAVU1gvJoLQ7aqWoGhvtH84YhyRwdCZQU5 row_data5.txt
```

```
## Pythonの準備
```
$ brew install pipenv pyenv
$ pipenv install
$ pipenv shell
$ python json_rpc_server.py
```

## 叩き方
`call_func`メソッドに対して下記2つを`params`として渡す。
- モデルのIPFSハッシュ値
- モデルへのインプットとなるデータのIPFSハッシュ値

curlで手っ取り早く叩くなら、こう。
```
curl -X "POST" "http://127.0.0.1:5000/call_func" \
  -H "Content-Type: application/json" \
  -d $'{"jsonrpc": "2.0", "method": "call_func", "params": ["QmRWSKSZVVkvQsnE4V6kavKoAMabHBDJM29EPstzq4cCtQ", "QmeTKajqCKFoKUmWEj8h2ACiG9BUDKPPNYiLBoup1Uewuf", 1, 11], "id": 1}'
```

それぞれのデータの中身は下記みたいな感じ。
- [QmRWSKSZVVkvQsnE4V6kavKoAMabHBDJM29EPstzq4cCtQ](https://gateway.ipfs.io/ipfs/QmRWSKSZVVkvQsnE4V6kavKoAMabHBDJM29EPstzq4cCtQ)
- [QmeTKajqCKFoKUmWEj8h2ACiG9BUDKPPNYiLBoup1Uewuf](https://gateway.ipfs.io/ipfs/QmeTKajqCKFoKUmWEj8h2ACiG9BUDKPPNYiLBoup1Uewuf)

## 実行結果

```
{"jsonrpc": "2.0", "result": "Qmbw1ZgY8vQz4eovirGyJZyPj1szdBJUB3PoadAkb79QjW", "id": 1}
```
- [Qmbw1ZgY8vQz4eovirGyJZyPj1szdBJUB3PoadAkb79QjW](https://gateway.ipfs.io/ipfs/Qmbw1ZgY8vQz4eovirGyJZyPj1szdBJUB3PoadAkb79QjW)
- [QmWnrXKUwgQ25hE7p6s1FGCshg41GmjGFeyXXyBYzAxLXj](https://gateway.ipfs.io/ipfs/QmWnrXKUwgQ25hE7p6s1FGCshg41GmjGFeyXXyBYzAxLXj)
