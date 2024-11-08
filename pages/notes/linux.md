---
layout: note
permalink: /pages/notes/linux.md/
---

# Linux

<hr class="small-hr">

## Commands

| Linux | Windows | Description |
| :---- | :------ | :---------- |
| cd &lt;path&gt; | cd &lt;path&gt; | ディレクトリの移動 |
| ls | dir | ディレクトリ内の内容を表示 |
| ls -a | - | 隠しファイルも表示 | 
| - | tree | ディレクトリのツリー構造を表示 |
| clear | cls | コンソールのクリア |
| rm -r &lt;dirname&gt; | rmdir &lt;dirname&gt;| ディレクトリの削除 |
| cp hoge.txt /hoge/hoge.txt| copy hoge.txt /hoge/hoge.txt| ファイルのコピー |
| mv -i hoge.txt /hoge/hoge.txt | -| 上書き確認オプション付きのファイルの移動 | 
| df -h | TBA| ディスクの使用状況の確認 | 
| touch &lt;filename&gt; | ni &lt;filename&gt; | ファイルの新規作成 | 

<hr class="small-hr">

## Ubuntu
Ubuntu のバージョン確認
```
cat /etc/lsb-release
```

<hr class="small-hr">

## Vim
ファイルを開く
```
vi file_name.sh
```

保存
```
:w
```

終了
```
:q
```