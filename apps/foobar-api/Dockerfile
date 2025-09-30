# Stage 1: build
FROM node:24.8.0-alpine AS builder
WORKDIR /app

# copy only package.json/yarn.lock for deps caching
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# copy workspace and build app
COPY . .
RUN nx run foobar-api:build

# Stage 2: production image
FROM node:24.8.0-alpine
WORKDIR /app
COPY --from=builder /app/dist/apps/foobar-api ./dist
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --production --frozen-lockfile

CMD ["node", "dist/apps/foobar-api/src/main.js"]