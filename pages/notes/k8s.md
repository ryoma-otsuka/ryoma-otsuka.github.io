## Kubernetes (k8s)
kubernetes: https://kubernetes.io/ja/  
kubectl: https://kubernetes.io/docs/reference/kubectl/  

Manifest File の作成ツールの実行
```
python cafe_toolkit.py -p ex00/params-xx.yaml -t ex00/ex00-dcl.yaml -s xx-seed-
```
Manifest Fileの実行
```
kubectl apply -f yaml/ex00-dcl-om-seed-0.yaml
```
podの確認
```
kubectl get pod
```
podのlogを確認--tail: 最新のxx件を表示--f: リアルタイムフォロー
```
kubectl logs --tail=20 [pod-name]
```
kubectl help
```
kubectl -h
```

## k9s
install
```
sudo apt updatesudo apt-get install build-essential procps curl file git
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
k9s を起動
```
k9s
```
readonlyでk9sを起動
```
k9s --readonly
```
k9sの終了 (or ctrl + c)
```
:q
```
STATUSでソート
```
shift + s
```
Search
```
/
```
STATUSでソート
```
shift + s
```
