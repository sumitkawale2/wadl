# Create
## create docker image of your project
  * `sudo docker build -t <image-name> .`
  >     sudo docker build -t react-image .

## OR
  >     sudo docker build . -t react-image

## see list of images
  >     sudo docker image ls

## create container of your image
  * `sudo docker run -it -p <local-port>:<container-port> --name <container-name> <image-name>`
  >     sudo docker run -it -p 3000:3000 --name react react-image

## OR for run in background `-d`
  >     sudo docker run -it -d -p 3000:3000 --name react react-image
  
# Other
## shows all
  >     sudo docker container ls -a
  
## shows only running
  >     sudo docker container ls   
  
## stop running container
  * `sudo docker stop <container-name>`
  >     sudo docker stop react
  
## start container
  * `sudo docker start <container-name>`
  >     sudo docker start react
  
## use shell of container
  * `sudo docker exec -it <container-name> sh`
  >     sudo docker exec -it react sh  
  
# `Dockerfile`
    # select image
    FROM node

    # set working directory
    WORKDIR /app

    # copy code
    COPY . /app

    # install dependencies
    RUN npm install

    # port forwarding
    EXPOSE 3000

    # start project
    CMD ["npm", "start"]
    
# `.dockerignore`
    /node_modules
