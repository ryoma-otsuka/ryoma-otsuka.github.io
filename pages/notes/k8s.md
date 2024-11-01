# k8s and k9s
- [Links](#links)
- [kubectl](#kubectl)
- [k9s](#k9s)

## Links
kubernetes (k8s): [https://kubernetes.io/ja/](https://kubernetes.io/ja/)  
kubectl: [https://kubernetes.io/docs/reference/kubectl/](https://kubernetes.io/docs/reference/kubectl/)  
k9s: [https://k9scli.io/](https://k9scli.io/)

## kubectl
podの確認
```
kubectl get pod
```
podのlogを確認  
```

kubectl logs --tail=20 [pod-name]
```
| Option | Function |
| :----- | :------- |
| --tail=xx | 最新のxx件を表示   |
| --f | リアルタイムフォロー |  

kubectl のヘルプ
```
kubectl -h
```

Manifest Fileの実行
```
kubectl apply -f yaml/ex00-dcl-xx-seed-0.yaml
```

## tools
Manifest File の作成ツールの実行
```
python cafe_toolkit.py -p ex00/params-xx.yaml -t ex00/ex00-dcl.yaml -s xx-seed-0
```

## k9s

### k9sの初期設定
install
```
sudo apt updatesudo apt-get install build-essential procps curl file git
```
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Enter password
```
echo "export PATH=/home/linuxbrew/.linuxbrew/bin:$PATH" >> ~/.bashrc
source ~/.bashrc
brew --version
brew install k9s
```

### k9sの使い方
k9s を起動
```
k9s
```
readonlyでk9sを起動
```
k9s --readonly
```
k9sの終了
```
:q
```
| Shortcut key | Function |
| :----- | :------- |
| shift + s | STATUSでソート |
| / | Search | 
| ctrl + c | k9sの終了 |  

