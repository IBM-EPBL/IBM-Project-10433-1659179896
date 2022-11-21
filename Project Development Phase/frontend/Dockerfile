# syntax=docker/dockerfile:1

FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm prune --production 

COPY . .

CMD [ "npm", "start" ]