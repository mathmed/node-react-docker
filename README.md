# Dockerize a Node.js/React application

A reference for running a NodeJS server and React-APP via Docker (docker-compose-3).

## Dependencies

To start the project, you need to have `docker` and `docker-compose` installed, then, so if you don't have it, run  

```
$ apt install docker-compose
``` 

## Usage

Run at project root    

```
$ sudo docker-compose up
```  

This will create two docker containers, the react frontend and the node API. Start editing the `front/` and `api/` directories. 


## Accessing

The client server is spun up at `localhost:3000` and the API at `localhost:8080`.


### Container shell

To access a container shell, run

```html
$ sudo docker exec -ti <container_id> /bin/sh/
```
