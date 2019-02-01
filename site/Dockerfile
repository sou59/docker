FROM node:8.15.0-alpine

LABEL MAINTAINER="Sou Zer <sz@gmail.com>"

RUN apk update && npm update

VOLUME [ "/usr/src/app" ]

COPY . /usr/src/app

WORKDIR /usr/src/app

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]

