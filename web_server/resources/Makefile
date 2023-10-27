set-nginx-conf: rewrite-nginx-setting reload-nginx

reload-nginx:
	service nginx reload

rewrite-nginx-setting:
	cp ./nginx/default.conf /etc/nginx/conf.d/default.conf
