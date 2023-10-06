setup-env: network-create

up: container-up nuxt-up vue-up react-up
down: container-down nuxt-down vue-down react-down
docker-build: container-build nuxt-build vue-build react-build

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

react-up:
	cd mfe_react && make up
react-down:
	cd mfe_react && make down
react-build:
	cd mfe_react && make docker-build

nuxt-up:
	cd mfe_nuxt && make up
nuxt-down:
	cd mfe_nuxt && make down
nuxt-build:
	cd mfe_nuxt && make docker-build

vue-up:
	cd mfe_vue && make up
vue-down:
	cd mfe_vue && make down
vue-build:
	cd mfe_vue && make docker-build