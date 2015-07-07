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

### セットアップ
MS Excel上でVBエディタを起動するには、[ファイル] -> [オプション] -> [リボンのユーザー設定]から"開発"にチェックを
入れ、有効化してください。
その後、ツールバーより"開発"タブを選択し、"Visual Basic"アイコンをクリックするとエディタが起動します。

本アプリのマクロ内ではDictionaryオブジェクトを使用しています。
オブジェクトを使用するために、MS Excel VBエディタの[ツール] -> [参照設定]より、"Microsoft Scripting Runtime"を選択し、有効化してください。

## 変更履歴

### 1.0.0 Jul 9, 2015

- イニシャルリリース
