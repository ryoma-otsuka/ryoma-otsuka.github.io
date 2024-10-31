## Docker
#### Docker のバージョン確認
```
docker version
```
#### image の確認 (-aオプション)
```
docker images
docker image ls
```
#### image の削除
```
docker image rm <image_name>
docker image rm <image_name1> <image_name2> ...
```
#### 起動中のコンテナの確認（-a オプションで全コンテナを表示）
```
docker ps
```
#### 各コンテナのDisk使用量を表示
```
docker system df -v
```
#### コンテナを作成・起動（ (pull) → create → start ） 
--name <container_name>:  作成するコンテナの名前を指定  
-p <host_port> <container_port>:  ポート番号の指定  
-v <host_disk> <container_disk>: ボリュームをマウントする  
-d: バックグランド実行  
```
docker run --name <container_name> -d <image_name>
```
#### コンテナの停止
```
docker stop <container_name>
```
#### コンテナの削除
```
docker rm <container_name>
```
#### Docker Compose Up  
定義ファイルに従って、コンテナ、ボリューム、ネットワークを作成実行するイメージが存在しない場合は、まずイメージを作成する。既にイメージが存在する場合はコンテナの作成から行う。  
-d: バックグランド実行（デーモン）(```docker-compose.yml```があるディレクトリにて)
```
docker-compose up -d
```
-f: ```docker-compose.yml``` のパスを指定
```
docker compose -f </hoge/docker-compose.yml> up -d
```
