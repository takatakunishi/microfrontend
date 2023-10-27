.PHONY: up down

up:
	docker-compose up -d

down:
	docker-compose down

docker-build:
	docker-compose build --no-cache

preview:
	docker compose exec vue make preview-in-docker

clear-port:
	kill -9 $$(lsof -t -i:3001) && kill -9 $$(lsof -t -i:3002)

preview-in-docker:
	cd front && npm run serve