FROM node:14-alpine
WORKDIR /app
ADD package.json .
RUN apk add --no-cache --update python3 make g++
RUN apk add --no-cache --update nano
RUN npm i
ADD . .
CMD npm run dev