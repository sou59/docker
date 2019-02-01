# Docker network

## Create cloned network

```bash
docker network create --driver=bridge astonnetwork
```
## Runing PHP

```bash
docker run -d --name php_server \
    -v "$PWD/web":/var/www/html \
    --network=astonnetwork \
    nanoninja/php-fpm
```
## Runing Nginx

```bash
docker run -d --name nginx_server -v "$PWD/etc/nginx":/etc/nginx/conf.d -v "$PWD/web":/var/www/html --network=astonnetwork -p 8000:80 nginx
```

