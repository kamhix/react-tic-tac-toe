FROM node:latest
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server
COPY package.json /usr/src/server/
RUN npm install
COPY . /usr/src/server
EXPOSE 5500
ENV MONGODB_URI mongodb://mongo/tictactoe
CMD [ "npm", "start" ]