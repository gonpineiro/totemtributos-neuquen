FROM node:alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY . ./
RUN npm rebuild node-sass
CMD ["npm", "start"]
EXPOSE 4000