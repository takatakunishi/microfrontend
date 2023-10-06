setup-env: network-create

up: container-up nuxt-up

# 環境作成
network-create:
	docker network create mfe_external


# アプリ立ち上げ
container-up:
	cd mfe_container && make up

nuxt-up:
	cd mfe_nuxt && make up