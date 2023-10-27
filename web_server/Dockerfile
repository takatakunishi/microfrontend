FROM nginx:stable-bullseye
WORKDIR /usr/src
COPY ./resources ./resources
RUN apt update && apt upgrade -y
RUN apt install make
RUN apt install nginx -y
EXPOSE 80