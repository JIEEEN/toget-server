FROM node:18-alpine

WORKDIR /toget-server

COPY . .

RUN yarn install --production

CMD ["node", "./app.js"]
