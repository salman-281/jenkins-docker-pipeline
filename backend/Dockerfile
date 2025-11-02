FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy all files including .env
COPY . .

# or explicitly (optional)
COPY .env .env

RUN npm run build

EXPOSE 5001

CMD ["npm", "run", "start:prod"]
