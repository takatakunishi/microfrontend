FROM node:20.8.0
WORKDIR /usr/src/app
COPY ./front ./front
RUN cd front && npm install && chown node -R node_modules
RUN apt update && apt install git -y
RUN apt install make
EXPOSE 3102 3152