FROM node:14-alpine
WORKDIR /app
ADD package.json .
RUN npm i
ADD . .
CMD node --max-http-header-size 262144000 --nolazy -r ts-node/register -r tsconfig-paths/register src/main.ts