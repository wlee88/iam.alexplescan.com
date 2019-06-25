FROM nginx:alpine

RUN apk add --update nodejs nodejs-npm

EXPOSE 80

RUN npm install && npm cache clean --force && npm run build



