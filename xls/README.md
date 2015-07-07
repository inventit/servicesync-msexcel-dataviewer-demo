MS Excel Sensor Data Viewer App
========

## 概要

このアプリケーションは、ServiceSyncサーバーのDBに保存されたセンサデータを閲覧することのできるXLSMファイルです。
ServiceSync ServerへアクセスするためにMOAT REST APIを使用します。

## ディレクトリ構成

ディレクトリ構成は、以下に示す通りです。以降、ルートディレクトリを、`${XLS_ROOT}`と表記します。

```
${XLS_ROOT}
├── README.md
├── xls_dataviewer.xlsm 
```

## スクリプト

このパッケージは、以下のスクリプトを含んでいます。

- `xls_dataviewer.xlsm`: ゲートウェイアプリからアップロードされたデータを、DBに保存するスクリプトです。

## モデル

| フィールド | 説明 |
|---|---|
| temperature | 温度です。`float`型です。 |
| humidity | 湿度です。`float`型です。 |
| timestamp | 収集した時刻のミリ秒表現です。`int64`型です。 |

## コマンド

<<<<<<< HEAD
### セットアップ (MS Excel 2010)
=======
### セットアップ
>>>>>>> 5fbd34ecb239a91015a3c7e4efcc3e17469a928f
MS Excel上でVBエディタを起動するには、[ファイル] -> [オプション] -> [リボンのユーザー設定]から"開発"にチェックを
入れ、有効化してください。
その後、ツールバーより"開発"タブを選択し、"Visual Basic"アイコンをクリックするとエディタが起動します。

本アプリのマクロ内ではDictionaryオブジェクトを使用しています。
オブジェクトを使用するために、MS Excel VBエディタの[ツール] -> [参照設定]より、"Microsoft Scripting Runtime"を選択し、有効化してください。

<<<<<<< HEAD
"Config"シートから、各パラメータを記入してください。
　-MOAT REST API URI: MOAT REST APIのエンドポイントです。サーバー管理者へ確認してください。また、弊社のトライアル環境をご使用の場合は http://www.servicesync.net/contact/ よりお問い合わせください。
  -App ID: ServiceSync Web コンンソールの ［設定］−［IIDN設定］から確認できす。
  -Client ID: ServiceSync Web コンンソールの ［設定］−［IIDN設定］から確認できす。
  -Client Secret ID: ServiceSync Web コンンソールの ［設定］−［IIDN設定］から確認できす。
  -Device Name: 現在未使用です。
  -Package ID: パッケージ名です。本サンプルでは"ssxls"と記入してください。
  -Model Name: モデル名です。本サンプルでは"SensingData"と記入してください。
  -Default Limit: １グラフにおけるデータ表示数です。

MS Excelにて起動するとデータビューアのフォームが起動します。
また、"GUI"シートに配置されているボタンをクリックしてもフォームは起動します。

=======
>>>>>>> 5fbd34ecb239a91015a3c7e4efcc3e17469a928f
## 変更履歴

### 1.0.0 Jul 9, 2015

- イニシャルリリース
