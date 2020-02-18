FROM nginx:1.15.7-alpine

COPY dist/angular-scaffold /usr/share/nginx/html
COPY dist/angular-scaffold/assets/gui.conf /etc/nginx/conf.d/gui.conf

EXPOSE 80
