.PHONY: up down

up:
	docker-compose up -d

down:
	docker-compose down

docker-build:
	docker-compose build --no-cache

build:
	cd front && npm run build

preview:
	docker compose exec nuxt make preview-in-docker

preview-in-docker:
	cd front && npm run preview

clear-port:
	kill -9 $$(lsof -t -i:3001)

serve:
	cd front && npm run preview