ServiceSync, MS Excel連携デモアプリ
=======================

## 概要

このアプリケーションはServiceSyncとMS Excelを連携させたデモ用アプリです。  
ゲートウェイで収集したセンサデータをServiceSyncサーバーのデータベースへ保存し、WindowsのMS Excelからデータを閲覧することが出来ます。  
またセンサデータビューアは[MOAT REST API](https://developers.servicesync.net/?page_id=90)のSEARCH機能を使用することによってデータ検索ができます。

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
### 2.0.0 Jul 28, 2015

- センサデータビューアへSEARCH機能を実装

### 1.0.0 Jul 13, 2015

- イニシャルリリース

