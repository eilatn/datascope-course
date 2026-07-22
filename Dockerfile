FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY website/ /srv/

EXPOSE 8080
