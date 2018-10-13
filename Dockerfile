# Node server
FROM node:latest as node-server
WORKDIR /usr/src/node-seed
COPY . .
RUN npm install 
EXPOSE 3000
CMD [ "npm", "run", "server" ]
