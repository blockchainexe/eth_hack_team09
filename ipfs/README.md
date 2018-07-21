## IPFSの準備
```
$ brew install ipfs
$ ipfs init
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
  -d $'{"jsonrpc": "2.0", "method": "call_func", "params": ["Qmf2UCYqf47oT6Lf5Egq1A6XUVrQpthWASyKEERGmg4P99", "QmadAopk2KMptZEBCMKjqdndmpdsVoWmQRG9nYVBaE5vZJ"], "id": 1}'
```

それぞれのデータの中身は下記みたいな感じ。

[Qmf2UCYqf47oT6Lf5Egq1A6XUVrQpthWASyKEERGmg4P99](https://gateway.ipfs.io/ipfs/Qmf2UCYqf47oT6Lf5Egq1A6XUVrQpthWASyKEERGmg4P99)
```
def inference(df):
  return df.sum()
```

[QmadAopk2KMptZEBCMKjqdndmpdsVoWmQRG9nYVBaE5vZJ](https://gateway.ipfs.io/ipfs/QmadAopk2KMptZEBCMKjqdndmpdsVoWmQRG9nYVBaE5vZJ)
```
0.679515068820495,0.24175278921866217,0.38408868124314355,0.5371858563576811,0.5011274005219366
0.9889813179464779,0.9365285959199897,0.5591762918181383,0.8253283201783604,0.027779560513268353
0.4987060090172074,0.5550218451058262,0.9622549659233464,0.9589405375948392,0.080392469914081
0.7473703323785205,0.8183148425922122,0.022792958005789066,0.6929388769404368,0.4391435312946276
```
