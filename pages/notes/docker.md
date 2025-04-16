---
layout: note
permalink: /pages/notes/docker.md/
---

# Docker
- [Basic](#basic)
- [Container](#container)

<hr class="small-hr">

## Basic

Docker のバージョン確認
```
docker version
```

docker image の確認 (-aオプションで全イメージを表示)
```
docker images
docker images -a
docker image ls
```

起動中のコンテナの確認（-a オプションで全コンテナを表示）
```
docker ps
docker ps -a
```

情報を絞って表示
```bash
docker ps --format "table {{.ID}}\t{{.Names}}\t{{.Status}}\t{{.Ports}}"
```

エイリアスを追加
```bash
echo 'alias dps="docker ps --format \"table {{.ID}}\t{{.Names}}\t{{.Status}}\t{{.Ports}}\""' >> ~/.bashrc
```

設定を反映
```bash
source ~/.bashrc
```

使用
```bash
dps
```

Dockerコンテナのターミナルを開く
```
docker exec -it <container-name> bash
```

各コンテナのDisk使用量を表示
```
docker system df -v
```

Jupyter Lab (Notebook) のサーバーのパスワード変更
（再設定後には再起動が必要）
```
jupyter lab password
jupyter notebook password
```

マウント
```
sudo mount -a
```

<hr class="small-hr">

## Container

### コンテナをバックグラウンドで起動（ビルド含む）
<span style="color: #56B4E9;">docker-compose.yaml</span> があるディレクトリにて実行  
<span style="color: #56B4E9;">-d</span> オプションでバックグランド実行（デーモン）
```
docker compose up -d
```

<span style="color: #56B4E9;">-f</span> オプションで <span style="color: #56B4E9;">docker-compose.yaml</span> のパスを指定
```
docker compose -f </hoge/docker-compose.yaml> up -d
```

古いversionのDocker Composeでは  
```
docker-compose up -d
```

<div class="note">
<strong>NOTE: </strong>
Dockerイメージが存在しない場合は、まずイメージを作成する（ビルド）。既にイメージが存在する場合はコンテナの起動から行う。定義ファイルに従って、コンテナ、ボリューム、ネットワークを構築していく。
</div>

<hr class="small-hr">

### run
コンテナの作成・起動 (pull) → create → start   
```
docker run --name <container-name> -d <image-name>
```

| Option | Function |
| :----- | :------- |
| --name <container-name> | 作成するコンテナの名前を指定 |
| -p <host-port> <container-port> | ポート番号の指定 |  
| -v <host-disk> <container-disk> | ボリュームをマウントする |  
| -d | バックグランド実行 |


### restert
Dockerコンテナの再起動
```
docker restart <container-name>
```

### stop
コンテナの停止
```
docker stop <container-name>
```

## Remove

（開発環境のリセット。環境構築中の試行錯誤段階で使う。）コンテナを停止し、 up で作成したコンテナ、ネットワーク、ボリューム、イメージを削除
```bash
docker compose down
```

docker image の削除
```
docker image rm <image-name>
docker image rm <image-name1> <image-name2> ...
```

container の削除
```
docker rm <container-name>
```

使っていないdocker imagesの削除
```
docker image prune
docker image prune -a
```

使っていないdocker imagesの削除
```
docker container prune
docker container prune -a
```


