# 何のためのディレクトリか

* webpackの [targetオプション](https://webpack.js.org/configuration/target/) を変更した場合にどのように成果物が変わるのか、実際に見てみたかったがために作ったディレクトリ。
  * [optimization.runtimeChunk](https://webpack.js.org/configuration/optimization/#optimizationruntimechunk) の設定をして、webpackのruntime(ロード時のモジュール読み込みを仲介するコード)を `dist/*/manifest.js`に分離し、そこからruntime以外の中身を読み込む過程を用意して確認した。

# 何が観測できたのか

* 今回、大きくNode.js系の環境とweb系の環境に分類した場合、各環境に応じたwebpackのruntimeコードが生成されることがわかった。
  * 具体的には以下の通り。
    * web系環境の場合( `target` に `"web"` や `["web", "es5"]` を指定した場合)には、globalオブジェクトを仲介して先にwebpackのruntimeコードを読み込ませることで、他のchunk(runtime以外のコード)をロードしたときにビルド時のグラフに則って読み込みが再現されることが確認できた。
    * 一方、Node.js系の環境の場合( `target` に `"node"`, `"async-node"` や `["node", "es5"]`, `["async-node", "es5"]` を指定した場合)は、globalオブジェクトではなく単にNode.jsの `require` を使って動的なモジュール読み込みが行われ、runtimeコードはエントリーポイントの中で最初に実行されてビルド時のグラフに則って読み込みが再現されることが確認できた。
    * また、上述の設定例の通り、`es5` を配列の一部として指定した場合には、webpackのruntime系の表現において、ES5のコードで表現されるようになった。つまり、動作系である`"web"` や `"node"` とともに設定することで有効に機能することがわかった。
