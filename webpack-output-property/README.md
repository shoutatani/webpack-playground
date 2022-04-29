# 何のためのディレクトリか

- webpack の [output オプション](https://webpack.js.org/configuration/output/) のうち、[output.library オプション](https://webpack.js.org/configuration/output/#outputlibrary)を変更した場合にどのように成果物が変わるのか、実際に見てみたかったがために作ったディレクトリ。
  - output.library オプションを変更した場合に、エントリーポイントからエクスポートされたモジュールがどのように利用可能になるのか見てみた。

# 何が観測できたのか

- [output.library.type オプション](https://webpack.js.org/configuration/output/#outputlibrarytype) は、それぞれ以下の通り使えることがわかった。
  - [type: "var"](https://webpack.js.org/configuration/output/#type-var) の場合
    - バンドルされたエントリーポイントのトップレベルで `var <library.name>;`と宣言され、そこに紐付けられることが見て取れた。
    - したがって、読み込まれた空間で(script タグ等を使って読み込んだ場合はグローバル空間で)、そのまま <library.name> として利用可能になる。
      - 上記の宣言は、Node.js では、JavaScript ファイルのスコープ内でのみ利用可能な変数となってしまうため、他ファイルからは利用できない。
  - [type: "assign"](https://webpack.js.org/configuration/output/#type-assign) の場合
    - バンドルされたエントリーポイントで `<library.name> = エクスポートするもの;` と、紐付けられることが見て取れた。これは、既存の宣言があればそこに直接 assign され、既存の宣言がなければグローバルスコープとして利用可能になるということ。
      - つまり、`var <library.name> = {a: 1};` などと宣言していた場合、 `{a: 1}` の既存のオブジェクトを上書きすることになる。
    - したがって、読み込まれた空間において(script タグ等を使って読み込んだ場合はグローバル空間において)、そのまま <library.name> として利用可能になる。
      - これに関しても、Node.js では上記の宣言は、JavaScript ファイルのスコープ内でのみ利用可能な変数となってしまうため、他ファイルからは利用できない。
  - [type: "assign-properties"](https://webpack.js.org/configuration/output/#type-assign-properties) の場合
    - バンドルされたエントリーポイントで、 `<library.name>[キー名] = エクスポートするもの;` と、紐付けられることが見て取れた。これは、既に対象のオブジェクトがあればそのプロパティに追記し、オブジェクトが無ければ新しいオブジェクトを与えたうえでそのプロパティに追記することが確認できた。
      - つまり、`var <library.name> = {a: 1};` などと宣言していた場合、 `{a: 1, <exported_key>: <exported_object>}` として、既存のオブジェクト上書きすることなくエクスポートされたオブジェクトが利用できるようになる。
      - まだ対象の変数にオブジェクトが紐付けられていなければ、 `{<exported_key>: <exported_object>}` の形のオブジェクトがバインドされることになる。
    - したがって、読み込まれた空間において(script タグ等を使って読み込んだ場合はグローバル空間において)、そのまま <library.name> として利用可能になる。
      - これに関しても、Node.js では上記の宣言は、JavaScript ファイルのスコープ内でのみ利用可能な変数となってしまうため、他ファイルからは利用できない。
  - [type: "this"](https://webpack.js.org/configuration/output/#type-this) の場合
    - バンドルされたエントリーポイントで、 `this.<library.name> = エクスポートするもの;` と、紐付けられることが見て取れた。
      - したがって、、ブラウザ環境で `this` に `window` オブジェクト紐付いている場合には、 `window.<library.name>` として利用可能になることがわかった。
      - また、Node.js 環境向けとして `target: "node"` で出力した場合には、ライブラリ内で `this` は `module.exports` に紐付くので、CommonJS として `const { <exported_key> } = require("<library.name>")` として呼び出すことも可能となる。
    - 読み込まれた空間において(script タグ等を使って読み込んだ場合はグローバル空間において)、 `this` に相当するオブジェクトに紐づくので、利用シーンに応じて呼び出し方を考えなければいけないことがわかった。
  - [type: "window"](https://webpack.js.org/configuration/output/#type-window) の場合
    - バンドルされたエントリーポイントで、 `window.<library.name> = エクスポートするもの;` と、紐付けられることが見て取れた。
      - したがって、、ブラウザ環境では `window.<library.name>` として利用可能になることがわかった。
  - [type: "global"](https://webpack.js.org/configuration/output/#type-global) の場合
    - バンドルされたエントリーポイントで、 `self.<library.name> = エクスポートするもの;` (web 環境) や `global.<library.name> = エクスポートするもの;` (Node.js 環境) などと、`target` オプションに応じた `global` オブジェクトに紐付けられることが見て取れた。
      - したがって、ブラウザ環境では `window.<library.name>` や `globalThis.<library.name>` として、Node.js 環境では `global.<library.name>` や `globalThis.<library.name>` として、利用可能になることがわかった。