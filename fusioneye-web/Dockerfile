FROM arm32v7/nginx:latest

COPY ./mime.types /etc/nginx/mime.types
COPY ./nginx.conf /etc/nginx/nginx.conf

ADD ./default.conf /etc/nginx/conf.d/.
ADD ./dist /usr/share/nginx/html
