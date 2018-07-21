## IPFSの準備
```
$ brew install ipfs
$ ipfs init
$ ./save_on_ipfs.sh
$ ipfs daemon
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
  -d $'{"jsonrpc": "2.0", "method": "call_func", "params": ["Qme7kSavPqjAE1nvW1GTAbq1ztAmiawHLEzpBCQ6zJaVVn", "Qma23jSD6SbojPKKyfzx9EfkGujM1BR65HuUk6kvyYaRmr", 10], "id": 1}'
```

それぞれのデータの中身は下記みたいな感じ。
- [Qme7kSavPqjAE1nvW1GTAbq1ztAmiawHLEzpBCQ6zJaVVn](https://gateway.ipfs.io/ipfs/Qme7kSavPqjAE1nvW1GTAbq1ztAmiawHLEzpBCQ6zJaVVn)
- [Qma23jSD6SbojPKKyfzx9EfkGujM1BR65HuUk6kvyYaRmr](https://gateway.ipfs.io/ipfs/Qma23jSD6SbojPKKyfzx9EfkGujM1BR65HuUk6kvyYaRmr)

## 実行結果

```
{"jsonrpc": "2.0", "result": "Qmbw1ZgY8vQz4eovirGyJZyPj1szdBJUB3PoadAkb79QjW", "id": 1}
```
- [Qmbw1ZgY8vQz4eovirGyJZyPj1szdBJUB3PoadAkb79QjW](https://gateway.ipfs.io/ipfs/Qmbw1ZgY8vQz4eovirGyJZyPj1szdBJUB3PoadAkb79QjW)
- [QmWnrXKUwgQ25hE7p6s1FGCshg41GmjGFeyXXyBYzAxLXj](https://gateway.ipfs.io/ipfs/QmWnrXKUwgQ25hE7p6s1FGCshg41GmjGFeyXXyBYzAxLXj)
