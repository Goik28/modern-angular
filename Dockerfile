# Stage 1 - build
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2 - runtime
FROM nginx:alpine

COPY --from=build /app/dist/modern-angular/browser/ /usr/share/nginx/html/

EXPOSE 80
