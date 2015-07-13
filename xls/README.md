Sensor Data Viewer 
========

## 概要

このアプリケーションは、ServiceSyncサーバーのデータベースに保存されたセンサデータを可視化するXLSMファイルです。
ServiceSyncサーバーへアクセスするためにMOAT REST APIを使用します。

##動作条件
本アプリケーションはMicrosoft Excel 2010での動作が確認されています。

## ディレクトリ構成

ディレクトリ構成は、以下に示す通りです。以降、ルートディレクトリを、`${XLS_ROOT}`と表記します。

```
${XLS_ROOT}
├── README.md
└── xls_dataviewer.xlsm 
```
## スクリプト

このパッケージは、以下のスクリプトを含んでいます。

- "xls_dataviewer.xlsm": サーバーに保存されたセンサデータを取得し、グラフに描画するxlsmファイルです。

## モデル

| フィールド | 説明 |
|---|---|
| temperature | 温度です。`float`型です。 |
| humidity | 湿度です。`float`型です。 |
| timestamp | 収集した時刻のミリ秒表現です。`int64`型です。 |

### セットアップ (MS Excel 2010)

- MS Excel上でVBエディタを起動できるように設定します。[ファイル] -> [オプション] -> [リボンのユーザー設定]から"開発"にチェックを入れ、有効化してください。
その後、ツールバーより"開発"タブを選択し、"Visual Basic"アイコンをクリックするとエディタが起動します。

- マクロ内で使用しているDictionaryオブジェクトのために、MS Excel VBエディタの[ツール] -> [参照設定]より、"Microsoft Scripting Runtime"を選択し、有効化してください。

- "Config"シートから、各パラメータを記入してください。
　- MOAT REST API URI: MOAT REST APIのエンドポイントです。サーバー管理者へ確認してください。また、弊社のトライアル環境をご使用の場合は http://www.servicesync.net/contact/ よりお問い合わせください。
  - App ID: ServiceSync Web コンンソールの ［設定］−［IIDN設定］から確認できす。
  - Client ID: ServiceSync Web コンンソールの ［設定］−［IIDN設定］から確認できす。
  - Client Secret ID: ServiceSync Web コンンソールの ［設定］−［IIDN設定］から確認できす。
  - Device Name: ServiceSyncクライアントで初回起動した時に自動的に設定されデバイスIDです。クライアントで次のコマンドで確認できます。　cat /opt/inventit/ssegw/res/device_name
  - Package ID: パッケージ名です。本サンプルでは"ssxls"と記入してください。
  - Model Name: モデル名です。本サンプルでは"SensingData"と記入してください。
  - Default Limit: 一度に取得する最大データ数です。

- MS Excelにて起動するとセンサデータビューアのフォームが起動します。
また、"GUI"シートに配置されているボタンをクリックしてもフォームを起動することができます。

###ライセンス
本アプリケーションでは次のオープンソースソフトウェアを使用しています。

````
 VBA-JSON v1.0.2
 ' (c) Tim Hall - https://github.com/VBA-tools/VBA-JSON
 '
 ' JSON Converter for VBA
 '
 ' Errors:
 ' 10001 - JSON parse error
 '
 ' @class JsonConverter
 ' @author tim.hall.engr@gmail.com
 ' @license MIT (http://www.opensource.org/licenses/mit-license.php)
 '' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ '
 '
 ' Based originally on vba-json (with extensive changes)
 ' BSD license included below
 '
 ' JSONLib, http://code.google.com/p/vba-json/
 '
 ' Copyright (c) 2013, Ryo Yokoyama
 ' All rights reserved.
 '
 ' Redistribution and use in source and binary forms, with or without
 ' modification, are permitted provided that the following conditions are met:
 '     * Redistributions of source code must retain the above copyright
 '       notice, this list of conditions and the following disclaimer.
 '     * Redistributions in binary form must reproduce the above copyright
 '       notice, this list of conditions and the following disclaimer in the
 '       documentation and/or other materials provided with the distribution.
 '     * Neither the name of the <organization> nor the
 '       names of its contributors may be used to endorse or promote products
 '       derived from this software without specific prior written permission.
 '
 ' THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ' ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 ' WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 ' DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 ' DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 ' (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 ' LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 ' ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 ' (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 ' SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 ' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
````

## 変更履歴

### 1.0.0 Jul 13, 2015

- イニシャルリリース
