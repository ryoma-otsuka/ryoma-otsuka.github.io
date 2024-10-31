## renv
開発環境の確認
```
writeLines(capture.output(sessionInfo()), "sessionInfo.txt")
```
renvのインストール
```
install.packages("renv")
```
renvの仮想環境の作成（ローカル環境がベースとなる。）.Rprojがあるディレクトリで作成する。→ .Rprojファイルが自動で仮想環境をアクチベートするようになっている。 
```
renv::init()
```
renvの仮想環境の情報をrenv.lockファイルに保存
```
renv::snapshot()
```
renv.lockファイルを用いて環境を再現
```
renv::restore()
```
