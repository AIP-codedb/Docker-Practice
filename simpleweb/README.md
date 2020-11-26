docker build -t amitkora/simpleweb .

docker run amitkora/simpleweb

localhost:8080 is not rechable

# Port mapping
docker run -p 8080:8080 amitkora/simpleweb

# chages made in the local file index.js will not get reflected in container.

>just copy the changed files and do not re-install the dependencies again



