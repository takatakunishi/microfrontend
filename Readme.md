# What is this project

このレポジトリはマイクロフロントエンド(MFE, Microfrontend)を検証する個人的なレポジトリです。  
マイクロフロントエンドの構築方法はいくつかありますが、このレポジトリではランタイム統合(app shell)、iframe、Web Components(Shadow DOM)を使っています。  
コンテナアプリケーション（親、ホスト）をReact、フラグメント（子、マイクロフロントエンドアプリ、リモートなどで呼ばれているもの）をReact、Vue、Nuxtで構築し、各フラグメントはランタイム統合、iframe、Web Componentsそれぞれで構成されたものを用意しています。  
動作を検証した結果、どうしても動かない部分or動かす方法はあるが修正が面倒くさい部分は動かない状態で放置しています。  
(コードや見た目が汚いのは目を瞑っていただけると...検証用なので...)

## 使用フロー

### 動作条件

- Docker (docker compose)が利用可能
  - [Dockerリンク](https://www.docker.com/)
- GNU Makeが利用可能 (なくても良いですが、このReadmeではあることを前提として記述しています)
  - [GNU Makeリンク](https://www.gnu.org/software/make/)
- Task(go-task)が利用可能(なくても良いですが、あると便利です)
  - [Taskリンク](https://taskfile.dev/)

### go-task & makeで動作させる場合

0. [初回のみ] `task setup-env`: 環境設定を行う
1. `task up`:Docker containerの立ち上げとコードの変更差分をwatchしながらbuildと配信の実行
2. <http://localhost>にアクセス
3. `task down`:終了

### makeコマンドのみで動作させる場合

0. [初回のみ] `make setup-env`: 環境設定を行う
1. `make up`：Docker containerなどの立ち上げ
2. 以下ターミナルを分けて実行 (各マイクロフロントエンドアプリのコードの変更差分をwatchしながらbuildと配信の実行)
   1. `make cp` Contiainer（親）アプリケーションの起動
   2. `make rp` Reactアプリケーションの起動
   3. `make vp` Vueアプリケーションの起動
   4. `make np` Nuxtアプリケーションの起動
3. <http://localhost>にアクセス
4. `make down`: dockerなどの終了

## その他

- 上記以外のコマンドに関しては`./Taskfile.yml`や`Makefile`を確認してください。
- マイクロフロントエンド化にともなうWebサーバーのパス制御に関する設定は`web_server/resources/nginx/default.conf`に記述してます

## 動作確認

- Mac (M1 Max) Monterey
