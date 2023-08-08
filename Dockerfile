FROM node:18.16.1-slim
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install pm2 -g
#    && pm2 install pm2-metrics

RUN npm install

COPY . .

EXPOSE 8000
EXPOSE 9209

CMD [ "pm2-runtime", "start", "ecosystem.json" ]
