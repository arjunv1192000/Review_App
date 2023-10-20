FROM node:18.17.0

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY  . .

EXPOSE 8080

CMD [ "npm","run","dev" ]
