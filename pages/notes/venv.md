## venv
新しい仮想環境の作成（Pythonのバージョンは仮想環境作成時のローカルのものと同じになる
```
python -m venv <venv-name>
```
pipのupdate
```
python.exe -m pip install --upgrade pip
```
PythonのVersionの確認
```
python --version
```
ライブラリのインストール
```
pip install -r requirements.txt
```
venv仮想環境のアクティベート
```
.\venv-name\Scripts\activate
```
venv仮想環境のディアクティベート
```
deactivate
```
ライブラリの確認
```
pip freeze
```
ライブラリの情報をrequirements.txtに保存
```
pip freeze > requirements.txt
```
