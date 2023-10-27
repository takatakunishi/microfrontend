setup-env: network-create

up: container-up nuxt-up vue-up react-up server-up nginx-up set-nginx-conf
down: container-down nuxt-down vue-down react-down nginx-down server-down
docker-build: container-build nuxt-build vue-build react-build

# cd mfe_container && make cp
#  & cd mfe_react && make rp 
# && cd ../mfe_nuxt & make np & cd ../mfe_vue & make vp
# 環境作成
network-create:
	docker network create mfe_external


# アプリ立ち上げ/停止
container-up:
	cd mfe_container && make up
container-down:
	cd mfe_container && make down
container-build:
	cd mfe_container && make docker-build
cp: container-preview
container-preview:
	cd mfe_container && make preview

react-up:
	cd mfe_react && make up
react-down:
	cd mfe_react && make down
react-build:
	cd mfe_react && make docker-build
rp: react-preview
react-preview:
	cd mfe_react && make preview

nuxt-up:
	cd mfe_nuxt && make up
nuxt-down:
	cd mfe_nuxt && make down
nuxt-build:
	cd mfe_nuxt && make docker-build
np: nuxt-preview
nuxt-preview:
	cd mfe_nuxt && make preview

vue-up:
	cd mfe_vue && make up
vue-down:
	cd mfe_vue && make down
vue-build:
	cd mfe_vue && make docker-build
vp: vue-preview
vue-preview:
	cd mfe_vue && make preview

nginx-up:
	cd ./web_server && make up
nginx-down:
	cd ./web_server && make down
set-nginx-conf:
	cd ./web_server && make set-nginx-conf

server-up:
	cd ./mfe_server && make up
server-down:
	cd ./mfe_server && make down