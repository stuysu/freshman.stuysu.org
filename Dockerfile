FROM node:16

WORKDIR /app

COPY package.json /app

COPY package-lock.json /app

RUN npm install --production

COPY . /app

RUN ["npm", "run", "build"]

EXPOSE 80

ENV PORT 80

ENV HOST 0.0.0.0

ENV DB_CONNECT $DB_CONNECT

CMD ["npm", "start"]