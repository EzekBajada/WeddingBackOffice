FROM node:14.15.0-alpine3.11 as build
WORKDIR /app

COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx as runtime
COPY --from=build /app/dist /usr/share/nginx/html
