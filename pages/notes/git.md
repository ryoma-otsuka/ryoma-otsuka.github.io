## Git & GitHub

.gitignore    
https://github.com/github/gitignore    
https://www.toptal.com/developers/gitignore

.gitkeep    
空のディレクトリを残す    

### Git Commands

初期化（.gitの新規作成）    
```git init```

ユーザー名とアドレスの登録    
```
git config --global user.name "XXX"
git config --global user.email "XXX@xxx.com"
```

リモートリポジトリのクローン
```
git clone <https://github.com/XXX/XXX.git>
```
ディレクトリ名を指定してリモートリポジトリをクローン
```
git clone <https://github.com/XXX/XXX.git> <dir-name>
```
リモートリポジトリを追加（originという名前に設定する）
```
git remote add origin <https://github.com/XXX/XXX.git>
```
リモートリポジトリの確認
```
git remote -v
```
リモートリポジトリの変更
```
git remote set-url origin <new URL>
```
現在のブランチの状態を確認
```git status```
ログの確認
```git log```
ログを一行ずつ表示
```git log --oneline```
ブランチの一覧を確認
```
git branch
```
新規ブランチの作成
```
git branch <new-branch-name>
```
ブランチ名の変更
```
git branch -m <old-branch-name> <new-banch-name>
```
ブランチの削除
```
git branch -d <branch name>
```
ブランチの移動
```
git checkout <branch name>
```
フェッチ
```
git fetch
```
ブランチを指定してコメント付きでマージ
```
git merge <branch-name> -m "comment"
```
ブランチを指定してプル （fetch + merge）
```
git pull origin <branch-name>
```
すべての変更をステージ
```
git add --all
```
特定の変更だけ指定してステージ
```
git add <filename>
```
ステージした全ファイルをを元に戻す
```
git restore --staged .
```
コミット（コメント付き）
```
git commit -m "comment"
```
直前のコミットの取り消し
```
git reset --soft "HEAD^"
```
ブランチを指定してpush
```
git push origin <branch name>
```
直前のプッシュの取り消し
```
git push -f
```
タグの確認
```
git tag
```
タグ付け（コメント付き）
```
git tag -a tag-name -m 'tag comment'
```
指定したtagをpush
```
git push origin tag-name
```
ファイルの削除
```
git rm -f <filename>
```
ファイル名の変更
```
git mv <old_file> <new_file>
```
ディレクトリ名を変更
```
git mv <old_directory/> <new_direcotry/>
```
直前のプッシュの取り消し
```
git push -f
```
