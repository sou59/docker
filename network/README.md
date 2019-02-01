# Docker network

## Create cloned network

```bash
docker network create --driver=bridge astonnetwork
```
## Runing PHP

```bash
docker run -d --name php_server --restart=always  \
    -v "$PWD/web":/var/www/html \
    --network=astonnetwork \
    nanoninja/php-fpm
```

## Runing Nginx

```bash
docker run -d --name nginx_server --restart=always -v "$PWD/etc/nginx":/etc/nginx/conf.d -v "$PWD/web":/var/www/html --network=astonnetwork -p 8000:80 nginx
```

## Runing MySQL

```bash
docker run -d --name mysql_server --restart=always  --network=astonnetwork -e MYSQL_DATABASE=test -e MYSQL_ROOT_PASSWORD=root mysql --default-authentication-plugin=mysql_native_password
```
## Running PHPMyAdmin

```bash
docker run -d --name myadmin --network=astonnetwork -e PMA_HOST=mysql_server -p "127.0.0.1:8080":80 phpmyadmin/phpmyadmin
```

