>>sudo docker build -t react-image .
OR
>>sudo docker build . -t react-image
>>sudo docker image ls
>>sudo docker run -it -p 3000:3000 --name react react-image
OR for run in background
>>sudo docker run -it -d -p 3000:3000 --name react react-image
>>sudo docker container ls -a   // shows all
>>sudo docker container ls      // shows only running
>>sudo docker stop react
>>sudo docker start react
>>sudo docker exec -it ae4d347015b3 sh  // to open shell