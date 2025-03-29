FROM node:20.17.0 as build

RUN npm install -g pnpm@9.9.0

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install

COPY . ./
ARG APP_ENV
ARG BUILD_NUMBER
ARG SENTRY_AUTH_TOKEN
RUN echo "" >> .env
RUN echo "VITE_APP_VERSION_DATE=${BUILD_NUMBER}" >> .env
RUN cat .env
# APP_ENV 有 dev, staging, prod 三種可能
RUN pnpm run build:${APP_ENV}

FROM nginx:stable-alpine
RUN rm /etc/nginx/conf.d/*
COPY ./nginx/default.conf /etc/nginx/conf.d/
COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]