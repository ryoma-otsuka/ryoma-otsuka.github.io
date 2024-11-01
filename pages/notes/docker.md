# Docker
- [基本操作](#基本操作)
- [新しいコンテナの作成と起動](#新しいコンテナの作成と起動)
- [既存のイメージからコンテナの作成](#既存のイメージからコンテナの作成)
- [コンテナの停止と削除](#既存のイメージからコンテナの作成)
- [イメージの削除](#イメージの削除)

## 基本操作

Docker のバージョン確認
```
docker version
```

docker image の確認 (-aオプションで全イメージを表示)
```
docker images
docker image ls
```

起動中のコンテナの確認（-a オプションで全コンテナを表示）
```
docker ps
```

各コンテナのDisk使用量を表示
```
docker system df -v
```

## 新しいコンテナの作成と起動


コンテナの作成・起動（ (pull) → create → start ）   
```
docker run --name <container_name> -d <image_name>
```

| Option | Function |
| :----- | :------- |
| --name <container_name> | 作成するコンテナの名前を指定 |
| -p <host_port> <container_port> | ポート番号の指定 |  
| -v <host_disk> <container_disk> | ボリュームをマウントする |  
| -d | バックグランド実行 |

## 既存のイメージからコンテナの作成
既にイメージが存在する場合はコンテナの作成から行う。定義ファイルに従って、コンテナ、ボリューム、ネットワークを構築していく。（実行するイメージが存在しない場合は、まずイメージを作成する。）

(```docker-compose.yml```があるディレクトリにて実行。-dオプションでバックグランド実行（デーモン）)
```
docker-compose up -d
```

（-fオプションで```docker-compose.yml``` のパスを指定）
```
docker compose -f </hoge/docker-compose.yml> up -d
```

## コンテナの停止と削除
コンテナの停止
```
docker stop <container_name>
```

コンテナの削除
```
docker rm <container_name>
```

## イメージの削除
docker image の削除
```
docker image rm <image_name>
docker image rm <image_name1> <image_name2> ...
```