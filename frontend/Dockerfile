FROM node:12.18.0

WORKDIR /frontend

COPY package.json yarn.lock ./
RUN npm install

RUN useradd user
USER user
