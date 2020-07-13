#### Pycharm Pro local environment setup:

- if there is issue with setting up Docker compose environment in Pycharm,
  delete Docker volume called Pycharm_helpers.. and in Pycharm
  go to File -> Invalidate Cache / Restart... Try adding Docker compose
  environment again after that.
  
#### Docker tips and pitfalls:

- as discussed in https://github.com/docker/compose/issues/1607 web service's volume mount
  volume mount overrides .dockerignore. If you typed Makefile in .dockerignore, it would
  appear in run container because volume mount copied it there while composing up.
  Built image directly from Dockerfile works with .dockerignore but the moment you compose
  that built image with docker-compose, if there is volume mount that mounts directory 
  that contains ignored files, ignored files will be coppied to container.
  Because of that volume mount is removed from production environment.
  
#### Setup django and react(CRA) with docker and docker compose
- django + react https://www.craigfranklin.dev/python/docker/javascript/2019/05/16/docker-compose-django-cra/

#### Run react as standalone docker container
- docker run -v $PWD/frontend:/frontend -it -p 3000:3000 frontend:latest2 npm start

#### Why explicit permission setting if docker on Linux
- https://vsupalov.com/docker-shared-permissions/
