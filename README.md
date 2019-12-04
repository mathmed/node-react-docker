# Dockerize a Node.js/React application

A reference for running a node server and react app via docker-compose.

## Dependencies

To start the project, you need to have `docker-compose` installed, then, so if you don't have it, run  

```
$ apt install docker-compose
``` 

## Usage

Run at project root    

```
$ sudo docker-compose up
```  

This will create two docker containers, the react frontend and the node API. Edit the `front/` and `api` directories. 


## Accessing

The client server is spun up at `localhost:3000` and the API at `localhost:8080`.


### Container shell

To access a container shell, run

```html
$ sudo docker exec -ti <container_name> /bin/sh/
```
