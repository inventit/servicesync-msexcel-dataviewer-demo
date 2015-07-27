ServiceSync, MS Excel連携デモアプリ
=======================

## 概要

このアプリケーションはServiceSyncとMS Excelを連携させるデモ用アプリです。  
ゲートウェイで収集したセンサデータをサーバーのデータベースへ保存し、WindowsのMS Excelからデータを閲覧することが出来ます。  
version2.0.0よりセンサデータビューアが検索機能に対応しました。

## ディレクトリ構成
````
.  
├── README.md  
├── c .................. (1)  
├── js ................. (2)  
└── xls ................ (3)  
````
- (1) ゲートウェイアプリが配置されています。詳細については、`c/README.md`を参照してください。  
- (2) サーバーアプリが配置されています。詳細については、`js/README.md`を参照してください。  
- (3) センサデータビューアアプリが配置されています。詳細については、`xls/README.md`を参照してください。  

## 変更履歴

### 1.0.0 Jul 13, 2015

- イニシャルリリース

### 2.0.0 Jul 28, 2015

- センサデータビューア機能拡張。開発者定義モデル検索機能に対応
