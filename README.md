# Docker-Practice
>starts and runs the default command

docker run hello-world

>override the command

docker run busybox ls

docker ps

docker ps --all

docker run busybox ping google.com

>create and start the container

docker create hello-world

>> a will watch for the o/p

docker -a start <id>

>> docker run is combination of above two commands

docker run hello-world

> docker start will start an existing container with default command. we cant override the default command there

docker system prune

>below command does not run or restart the container

docker logs <id>

docker stop/kill <id>

> running a second command in container

docker run redis

docker exec -it <id> redis-cli

docker exec -it <id> sh

>>redis-cli

>

docker run -it busybox sh

# Building a Redis Image

>create a Docker file

docker build .

docker run <id>

#Tagging an image
docker build -t amitkora/redis:latest .
>tag latest is taken by default
docker run amitkora/redis

# Creating a simpleweb

# Port mapping
docker run -p 8080:8080 amitkora/simpleweb

#App to count number of visits
multiple docker container with node app and one container with redis to store the count

In the example we will have one container for node app and one container for redis



# runs the container in background
docker run -d redis

# to run multiple containers in background with docker-compose

docker-compose up -d

docker-compose down






