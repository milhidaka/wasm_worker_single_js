# wasm_worker_single_js
Example implementation of combining main JavaScript file and WebWorker JavaScript file which uses WebAssembly

フロントエンドのJavaScriptに、Worker上で動作するJavaScriptコードおよびWebAssemblyバイナリを埋め込む。これにより1つのjsファイルだけを読み込めばよくなる。

# 環境
Windows10上のコマンドプロンプトで、emscripten 2.0.xおよびpython 3.6以上が動作するよう環境変数がセットされていること

# ビルド
```
build.bat
```

# 実行
```
npx http-server -c-1
```

ブラウザで[http://localhost:8080/dist/](http://localhost:8080/dist/)を開く
