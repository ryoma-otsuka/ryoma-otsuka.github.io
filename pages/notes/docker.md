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

docker image の削除
```
docker image rm <image-name>
docker image rm <image-name1> <image-name2> ...
```

起動中のコンテナの確認（-a オプションで全コンテナを表示）
```
docker ps
docker ps -a
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

Dockerコンテナの再起動
```
docker restart <container-name>
```

マウント
```
sudo mount -a
```

<hr class="small-hr">

## Container

### docker-compose-up
<span style="color: #56B4E9;">docker-compose.yml</span> があるディレクトリにて実行  
<span style="color: #56B4E9;">-d</span> オプションでバックグランド実行（デーモン）
```
docker-compose up -d
```

<span style="color: #56B4E9;">-f</span> オプションで <span style="color: #56B4E9;">docker-compose.yml</span> のパスを指定
```
docker compose -f </hoge/docker-compose.yml> up -d
```

<div class="note">
<strong>NOTE: </strong>
既にイメージが存在する場合はコンテナの作成から行う。定義ファイルに従って、コンテナ、ボリューム、ネットワークを構築していく。（実行するイメージが存在しない場合は、まずイメージを作成する。）
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

### stop
コンテナの停止
```
docker stop <container-name>
```

### rm
コンテナの削除
```
docker rm <container-name>
```