# Docker Builds with Nx and Woodpecker

This guide explains how to set up and use Docker builds for your Nx workspace applications with Woodpecker CI.

## Overview

The setup includes:
- **Nx Docker Plugin**: Provides `docker:build` and `docker:run` targets
- **Multi-stage Dockerfiles**: Optimized for production with build and runtime stages
- **Woodpecker CI**: Automated building and pushing of Docker images
- **Multi-app support**: Each app has its own Docker image

## Project Structure

```
apps/
├── foobar-api/
│   ├── Dockerfile
│   ├── project.json (with docker targets)
│   └── src/
└── stuff-api/
    ├── Dockerfile
    ├── project.json (with docker targets)
    └── src/
```

## Docker Configuration

### 1. Dockerfiles

Each app has a multi-stage Dockerfile:

**Stage 1 (Builder):**
- Uses Node.js Alpine image
- Installs dependencies with pnpm
- Builds the application using Nx
- Outputs to `dist/apps/{app-name}`

**Stage 2 (Production):**
- Uses Node.js Alpine image
- Copies built application from builder stage
- Installs only production dependencies
- Runs the application

### 2. Nx Docker Targets

Each app's `project.json` includes:

```json
{
  "docker:build": {
    "executor": "@nx/docker:build",
    "options": {
      "dockerfile": "apps/{app-name}/Dockerfile",
      "context": ".",
      "tags": ["{app-name}:latest", "{app-name}:${BUILD_TAG}"]
    }
  },
  "docker:run": {
    "executor": "@nx/docker:run",
    "options": {
      "image": "{app-name}:latest",
      "ports": ["{port}:{port}"]
    }
  }
}
```

## Local Development

### Building Docker Images

```bash
# Build specific app
pnpm nx run foobar-api:docker:build
pnpm nx run stuff-api:docker:build

# Build all apps
pnpm nx run-many --target=docker:build --all
```

### Running Docker Containers

```bash
# Run specific app
pnpm nx run foobar-api:docker:run
pnpm nx run stuff-api:docker:run
```

### Manual Docker Commands

```bash
# Build image manually
docker build -f apps/foobar-api/Dockerfile -t foobar-api:latest .

# Run container manually
docker run -p 3000:3000 foobar-api:latest
```

## Woodpecker CI Pipeline

The Woodpecker workflow (`.woodpecker/workflow.yaml`) includes:

### 1. Build Step
- Installs dependencies
- Builds affected applications
- Uses pnpm for package management

### 2. Docker Build Step
- Builds Docker images for all apps
- Uses commit SHA as build tag
- Depends on the build step

### 3. Publish Steps
- Pushes images to Docker registry
- Tags with `latest` and commit SHA
- Separate steps for each app

## Environment Variables

Set these in your Woodpecker repository settings:

```bash
DOCKER_USERNAME=your-docker-username
DOCKER_PASSWORD=your-docker-password
```

## Registry Configuration

Update the registry URLs in `.woodpecker/workflow.yaml`:

```yaml
- name: publish-foobar-api
  image: woodpeckerci/plugin-docker-buildx
  settings:
    repo: your-registry.com/foobar-api  # Change this
    tags: latest,${CI_COMMIT_SHA:0:8}
```

## Adding New Apps

### 1. Create Dockerfile

```dockerfile
# Stage 1: build
FROM node:24.8.0-alpine AS builder
WORKDIR /app

# copy only package.json/pnpm-lock.yaml for deps caching
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile

# copy workspace and build app
COPY . .
RUN pnpm nx run {app-name}:build

# Stage 2: production image
FROM node:24.8.0-alpine
WORKDIR /app
COPY --from=builder /app/dist/apps/{app-name} ./dist
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --production --frozen-lockfile

CMD ["node", "dist/apps/{app-name}/src/main.js"]
```

### 2. Add Docker Targets

Add to `apps/{app-name}/project.json`:

```json
{
  "docker:build": {
    "executor": "@nx/docker:build",
    "options": {
      "dockerfile": "apps/{app-name}/Dockerfile",
      "context": ".",
      "tags": ["{app-name}:latest", "{app-name}:${BUILD_TAG}"]
    }
  },
  "docker:run": {
    "executor": "@nx/docker:run",
    "options": {
      "image": "{app-name}:latest",
      "ports": ["{port}:{port}"]
    }
  }
}
```

### 3. Update Woodpecker Workflow

Add build and publish steps for the new app in `.woodpecker/workflow.yaml`.

## Best Practices

### 1. Docker Layer Caching
- Copy `package.json` and `pnpm-lock.yaml` first
- Install dependencies before copying source code
- This maximizes Docker layer caching

### 2. Multi-stage Builds
- Separate build and runtime environments
- Smaller production images
- Better security (no build tools in production)

### 3. Nx Affected Builds
- Only build changed applications
- Faster CI/CD pipelines
- Reduced resource usage

### 4. Image Tagging
- Use commit SHA for traceability
- Tag with `latest` for easy deployment
- Consider semantic versioning for releases

## Troubleshooting

### Common Issues

1. **Build fails with "command not found: pnpm"**
   - Ensure `corepack enable` is run before pnpm commands

2. **Docker build context too large**
   - Add `.dockerignore` file to exclude unnecessary files
   - Use `.gitignore` as a starting point

3. **Port conflicts**
   - Ensure each app uses different ports
   - Update port mappings in `docker:run` targets

4. **Registry authentication fails**
   - Check `DOCKER_USERNAME` and `DOCKER_PASSWORD` environment variables
   - Verify registry URL is correct

### Debug Commands

```bash
# Check Docker images
docker images

# Inspect image layers
docker history {image-name}

# Run container with shell access
docker run -it {image-name} /bin/sh

# Check container logs
docker logs {container-id}
```

## Performance Optimization

### 1. Build Cache
- Use Nx build cache for faster builds
- Leverage Docker layer caching
- Consider using BuildKit for parallel builds

### 2. Image Size
- Use Alpine Linux base images
- Multi-stage builds to exclude build dependencies
- Remove unnecessary files and packages

### 3. CI/CD Optimization
- Use affected builds to only build changed apps
- Parallel Docker builds where possible
- Cache pnpm store between builds

## Security Considerations

1. **Base Images**: Use official, regularly updated base images
2. **Dependencies**: Keep dependencies up to date
3. **Secrets**: Never commit secrets to Docker images
4. **User Permissions**: Run containers as non-root user when possible
5. **Image Scanning**: Regularly scan images for vulnerabilities

## Monitoring and Logging

1. **Health Checks**: Add health check endpoints to your apps
2. **Logging**: Use structured logging (JSON format)
3. **Metrics**: Expose application metrics for monitoring
4. **Tracing**: Implement distributed tracing for microservices

This setup provides a robust foundation for containerizing your Nx applications with automated CI/CD using Woodpecker.
