static-website-pack
====

Standard static website building toolkit like make command by node.js + gulp.

Node.jsとGulpを使った標準的な静的ウェブサイトのmakeコマンド風のビルドツールキット。

## Installation

```
$ npm install static-website-pack --save-dev
```

## Synapsis / Description

ランディングページやコーポレートサイトやキャンペーンサイトなど、HTMLとアセット(css/js/img)をウェブサーバーに配置するウェブサイト制作案件で利用する想定をしたHTMLのビルドツールです。

webpackを利用したSPAのビルドや、Railsなどのアセットパイプラインと同等の機能を小規模な静的サイト向けに提供します。

## サンプルを使った動作テスト

```
# Clone this project.
$ git clone https://github.com/tkosuga/static-website-pack.git
# Install dependency libraries.
$ npm install
# Build example project. (ejs -> html, sass -> css, es6 -> js, image -> optimized image)
$ npm run task make:all
# Build example project by production.
$ npm run task make:all --env production
# Lunch http-server http://127.0.0.1:8080/.
$ npm run task httpserver
```

## サンプルのフォルダ構成を説明

- example
  - build ビルド中の中間生成物を格納するフォルダです。build以下は`make clean`でクリアできます。
  - dist ビルドした成果物を格納するフォルダです。dist以下は`make clean`でクリアできます。
  - env
    - development.env 開発環境用のビルドで利用する環境変数を記述するファイルです。
    - production.env リリース環境で利用する環境変数を記述するファイルです。
  - src サンプルプロジェクトのソースを格納するフォルダです。
    - ejs node.jsのテンプレートエンジンejsで書かれたHTMLを格納するフォルダです。
    - es js(es6含む)を格納するフォルダです。
    - img jpegやpngなど画像ファイルを格納するフォルダです。
    - sass sassを格納するフォルダです。
    - /(直下) favicon.ico, robots.txt等の個別ファイルを置きます。
  - config.js ファイル名固定です。プロジェクトの設定を記述するファイルです。
  - home.js gulpスクリプトです。

## Usage / 使い方

```
const website = require('static-website-pack')('gulp-scripts/landing-page-1');
```

`package.json`のscriptsに実行するgulpスクリプトファイルを指定します。

```
"scripts": {
  "task": "gulp --gulpfile example/home.js --cwd ./",
},
```

`config.js`に読み込み先ファイル名や出力先フォルダ名を指定します。

`home.js`でgulpを使ったビルドルールを定義します。

```
const website = require('static-website-pack')('gulp/miko');
```

### EJS

ejsをhtmlにコンパイルするタスクセットです。

- npm run task ejs:compile
- npm run task ejs:watch

### SASS

scssをcssにコンパイルするタスクセットです。

- npm run task sass:lint
- npm run task sass:compile
- npm run task sass:watch

### ES(ESMAScript)

jsをブラウザ用にコンパイルするタスクセットです。

- npm run task es:lint
- npm run task es:compile
- npm run task es:watch

### HTML (EJS -> HTML)

デプロイする成果物となるhtmlを生成するタスクセットです。

- npm run task html:minify

### CSS (SASS -> CSS)

デプロイする成果物となるcssを生成するタスクセットです。

- npm run task css:minify
- npm run task css:concat

### JS (ES -> JS)

デプロイする成果物となるjsを生成するタスクセットです。

- npm run task js:minify
- npm run task js:concat

### IMG(Image resources)

画像を軽量化するタスクセットです。

- npm run task img:compress

### MAKE

デプロイする成果物一式を生成するタスクセットです。

- npm run task make:prebuild
- npm run task make:compile
- npm run task make:build
- npm run task make:dist
- npm run task make:clean

### WATCH

ファイル更新に合わせてsass/ejsのコンパイルを行うための常駐型タスクです。

- npm run task watch

### HTTP-SERVER

ビルドしたHTMLの表示確認を行うためhttp-serverを起動します。

- npm run task httpserver

## ビルドモードの指定

環境変数のBUILD_ENVをビルドモードに利用しています。環境変数にBUILD_ENVが見つからない場合のデフォルト値は'development'です。
引数に `--env production` を付けるとproductionでビルドを行います。

## プロジェクトのテスト

```
$ npm test
```
