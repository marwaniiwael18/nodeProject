FROM node:10-alpine
COPY package*.json /app/
COPY index.js /app/


WORKDIR /app
RUN npm install

EXPOSE 8085

CMD [ "node", "index.js" ]