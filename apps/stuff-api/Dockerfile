# Stage 1: build
FROM node:24.8.0-alpine AS builder
WORKDIR /app

# copy only package.json/pnpm-lock.yaml for deps caching
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile

# copy workspace and build app
COPY . .
RUN pnpm nx run stuff-api:build

# Stage 2: production image
FROM node:24.8.0-alpine
WORKDIR /app
COPY --from=builder /app/dist/apps/stuff-api ./dist
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --production --frozen-lockfile

CMD ["node", "dist/apps/stuff-api/src/main.js"]
