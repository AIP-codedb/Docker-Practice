![worflow-diagram](Images/image1.png)

*****Dockerfile.dev for development environment and Dockerfile for prod environment*****

# Running a dockerfile with custom name
_docker build -f Dockerfile.dev ._

frontend folder has react-app code that we ll wrap in docker. Once built App can be started with the following command.

_docker run -it -p 3000:3000 8d2af51fc407_