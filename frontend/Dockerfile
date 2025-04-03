FROM node:20-alpine AS base
WORKDIR /app

FROM base AS development
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

FROM base AS production
COPY package*.json ./
# First try npm ci, if it fails fall back to npm install
RUN npm ci || npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
