gulp
====

サイトをビルドするgulpスクリプトを整備中です。

- gulp/ - gulpスクリプトを保存するフォルダです。
  - commons/ - 共通で利用するスクリプトを格納しています。
    - tasks/ - gulp.taskで利用するスクリプトを細分化して格納しています。
  - config/ - プロジェクト個別の設定ファイルです。
  - xxxx(project name).js - プロジェクト個別のgulpスクリプトです。


## EJS

ejsをhtmlにコンパイルするタスクセットです。

gulp --gulpfile gulp/home.js --cwd ./ ejs:compile
gulp --gulpfile gulp/home.js --cwd ./ ejs:watch

## SASS

scssをcssにコンパイルするタスクセットです。

gulp --gulpfile gulp/home.js --cwd ./ sass:lint
gulp --gulpfile gulp/home.js --cwd ./ sass:compile
gulp --gulpfile gulp/home.js --cwd ./ sass:watch

## ES(ESMAScript)

jsをブラウザ用にコンパイルするタスクセットです。

gulp --gulpfile gulp/home.js --cwd ./ es:lint
gulp --gulpfile gulp/home.js --cwd ./ es:compile
gulp --gulpfile gulp/home.js --cwd ./ es:watch

## HTML (EJS -> HTML)

デプロイする成果物となるhtmlを生成するタスクセットです。

gulp --gulpfile gulp/home.js --cwd ./ html:minify

## CSS (SASS -> CSS)

デプロイする成果物となるcssを生成するタスクセットです。

gulp --gulpfile gulp/home.js --cwd ./ css:minify
gulp --gulpfile gulp/home.js --cwd ./ css:concat

## JS (ES -> JS)

デプロイする成果物となるjsを生成するタスクセットです。

gulp --gulpfile gulp/home.js --cwd ./ js:minify
gulp --gulpfile gulp/home.js --cwd ./ js:concat

## IMG(Image resources)

画像を軽量化するタスクセットです。

gulp --gulpfile gulp/home.js --cwd ./ img:compress

## MAKE

デプロイする成果物一式を生成するタスクセットです。

gulp --gulpfile gulp/home.js --cwd ./ make:precompile
gulp --gulpfile gulp/home.js --cwd ./ make:compile
gulp --gulpfile gulp/home.js --cwd ./ make:build
gulp --gulpfile gulp/home.js --cwd ./ make:dist
gulp --gulpfile gulp/home.js --cwd ./ make:clean

## WATCH

ファイル更新に合わせてsass/ejsのコンパイルを行うための常駐型タスクです。

gulp --gulpfile gulp/home.js --cwd ./ watch
