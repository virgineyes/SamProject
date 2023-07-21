FROM node:lts-alpine as build-stage

WORKDIR /app
COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

FROM it-docker.deltaww.com/nginx:1.21.5-alpine.itmdev-cache-gzip as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
