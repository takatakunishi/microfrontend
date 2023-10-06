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
	cd front && npm run build && npm run preview

serve:
	cd front && npm run preview