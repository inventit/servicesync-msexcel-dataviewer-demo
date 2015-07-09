ServiceSync, MS Excel連携デモアプリ
=======================

## 概要

このアプリケーションはServiceSyncとMS Excelとを連携させるデモンストレーション用のアプリです。  
ゲートウェイで収集したセンサデータを、ServerのDataBaseに保存し、Windows上のMS Excelからデータを閲覧することが出来ます。  
  
## ディレクトリ構成
.  
├── README.md  
├── c .................. (1)  
└── js ................. (2)  
└── xls ................ (3)  
- (1) ゲートウェイアプリが配置されています。詳細については、`c/README.md`を参照してください。  
- (2) サーバーアプリが配置されています。詳細については、`js/README.md`を参照してください。  
- (3) データビューアアプリが配置されています。詳細については、`xls/README.md`を参照してください。  
  
##ライセンス
本アプリケーションでは次のオープンソースソフトウェアを使用しています。  
  
' VBA-JSON v1.0.2  
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
  
## 変更履歴

### 1.0.0 Jul 9, 2015

- イニシャルリリース
