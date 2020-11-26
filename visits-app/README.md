# App to count number of visits
multiple docker container with node app and one container with redis to store the count

In the example we will have one container for node app and one container for redis

Docker CLI has some networking features to connect two containers

We ll use docker compose instead. This helps connection between containers easy. There will be free access b/w containers. index.js has the connection configuration.

Create two services redis-server and node-app

redis-server - create using the image: 'redis'

node-app - Use Dockerfile in the current dir and create container

ports - open a list of ports, here just one mapping 4001 on local machine and 8081 in container

# Start the container with Docker compose file

docker-compose up is equivalent to docker run <image>

docker-compose up --build is equivalent to below two

docker build .

docker run <image>

# to run/stop multiple containers in background with docker-compose

docker-compose up -d

docker-compose down

# restart policy in docker-compose in case of any container failure

restart: no/always/on-failure/unless-stopped

# status of container in compose file

docker-compose ps

# to run multiple containers in background with docker-compose

docker-compose up -d

docker-compose down



