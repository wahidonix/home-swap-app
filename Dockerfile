FROM node:16-alpine AS build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Serve Application using Nginx Server

FROM nginx:alpine

COPY --from=build /app/dist/ui-baze/ /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
