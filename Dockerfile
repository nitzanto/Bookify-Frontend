FROM node:18-alpine

ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


EXPOSE 5173

CMD ["npm", "run", "dev"]
