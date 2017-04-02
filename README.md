static-website-pack
====

Standard static website building toolkit like make command by node.js + gulp.

```
# Clone this project.
$ git clone https://github.com/tkosuga/static-website-pack.git
# Install dependency libraries.
$ npm install
# Build example project. (ejs -> html, sass -> css, es6 -> js, image -> optimized image)
$ gulp --gulpfile example/home.js --cwd ./ make:all
# Build example project by production.
$ gulp --gulpfile example/home.js --cwd ./ make:all --env production
# Lunch http-server. Access http://127.0.0.1:8080/.
$ gulp --gulpfile example/home.js --cwd ./ httpserver
```

- example
  - build ビルド中の中間生成物を格納するフォルダです。build以下は`make clean`でクリアできます。
  - dist ビルドした成果物を格納するフォルダです。dist以下は`make clean`でクリアできます。
  - src サンプルプロジェクトのソースを格納するフォルダです。直下にファイルを置くこともできます。
    - ejs node.jsのテンプレートエンジンejsで書かれたHTMLを格納するフォルダです。
    - es js(es6含む)を格納するフォルダです。
    - sass sassを格納するフォルダです。
    - img jpegやpngなど画像ファイルを格納するフォルダです。
    - /(直下) favicon.ico, robots.txt等の個別ファイルを置いています。
  - env
    - development.env 開発環境用のビルドで利用する環境変数を記述するファイルです。
    - production.env リリース環境で利用する環境変数を記述するファイルです。
  - config.js ファイル名固定です。プロジェクトの設定を記述するファイルです。
  - home.js gulpのビルドスクリプトです。

環境変数のBUILD_ENVをビルドモードに利用しています。環境変数にBUILD_ENVが見つからない場合のデフォルト値は'development'です。
引数に `--env production` を付けるとproductionでビルドを行います。

## EJS

ejsをhtmlにコンパイルするタスクセットです。

- gulp --gulpfile example/home.js --cwd ./ ejs:compile
- gulp --gulpfile example/home.js --cwd ./ ejs:watch

## SASS

scssをcssにコンパイルするタスクセットです。

- gulp --gulpfile example/home.js --cwd ./ sass:lint
- gulp --gulpfile example/home.js --cwd ./ sass:compile
- gulp --gulpfile example/home.js --cwd ./ sass:watch

## ES(ESMAScript)

jsをブラウザ用にコンパイルするタスクセットです。

- gulp --gulpfile example/home.js --cwd ./ es:lint
- gulp --gulpfile example/home.js --cwd ./ es:compile
- gulp --gulpfile example/home.js --cwd ./ es:watch

## HTML (EJS -> HTML)

デプロイする成果物となるhtmlを生成するタスクセットです。

- gulp --gulpfile example/home.js --cwd ./ html:minify

## CSS (SASS -> CSS)

デプロイする成果物となるcssを生成するタスクセットです。

- gulp --gulpfile example/home.js --cwd ./ css:minify
- gulp --gulpfile example/home.js --cwd ./ css:concat

## JS (ES -> JS)

デプロイする成果物となるjsを生成するタスクセットです。

- gulp --gulpfile example/home.js --cwd ./ js:minify
- gulp --gulpfile example/home.js --cwd ./ js:concat

## IMG(Image resources)

画像を軽量化するタスクセットです。

- gulp --gulpfile example/home.js --cwd ./ img:compress

## MAKE

デプロイする成果物一式を生成するタスクセットです。

- gulp --gulpfile example/home.js --cwd ./ make:prebuild
- gulp --gulpfile example/home.js --cwd ./ make:compile
- gulp --gulpfile example/home.js --cwd ./ make:build
- gulp --gulpfile example/home.js --cwd ./ make:dist
- gulp --gulpfile example/home.js --cwd ./ make:clean

## WATCH

ファイル更新に合わせてsass/ejsのコンパイルを行うための常駐型タスクです。

- gulp --gulpfile example/home.js --cwd ./ watch

## SERVER

ビルドしたHTMLの表示確認を行うためhttp-serverを起動します。

- gulp --gulpfile example/home.js --cwd ./ httpserver
