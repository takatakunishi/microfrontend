FROM node:20.8.0
WORKDIR /usr/src/app
COPY ./server/package*.json ./
RUN npm install && chown node -R node_modules
COPY ./server /usr/src/app/
EXPOSE 3010