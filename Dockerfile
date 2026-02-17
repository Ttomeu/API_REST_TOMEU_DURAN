
FROM node:20-slim


WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install --only=production


COPY . .


RUN chown -R node:node /usr/src/app
USER node


EXPOSE 3000


CMD [ "node", "app.js" ]