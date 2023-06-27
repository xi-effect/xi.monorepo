FROM node:16-alpine AS base

FROM base AS pruner
ARG APP_NAME=xi.front

# Install system-level components
RUN apk add --no-cache libc6-compat
RUN apk update
RUN npm install -g turbo

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Prune everything but xi.front
RUN turbo prune --scope=${APP_NAME} --docker

FROM base AS builder
ARG APP_NAME=xi.front

# Install system-level components
RUN apk add --no-cache libc6-compat openssh-client git
RUN apk update
RUN npm install -g npm@9.1.2

# Set working directory
WORKDIR /app

# Install all dependencies
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/package-lock.json ./package-lock.json
RUN npm install

# Build the project
COPY --from=pruner /app/out/full/ .
COPY turbo.json turbo.json
RUN npm run build --filter=${APP_NAME}...

FROM base AS runner
ARG APP_NAME=xi.front

# Install system-level components
RUN apk add --no-cache libc6-compat openssh-client git
RUN npm install -g npm@9.1.2

# Set working directory
WORKDIR /app

# Setting up users to avoid using root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copying config files
COPY --from=builder /app/apps/${APP_NAME}/next.config.js ./
COPY --from=builder /app/apps/${APP_NAME}/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/apps/${APP_NAME}/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/${APP_NAME}/.next/static ./apps/${APP_NAME}/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/${APP_NAME}/public ./apps/${APP_NAME}/public

# COPY --from=builder --chown=nextjs:nodejs /app/apps/${APP_NAME}/public/ public/
# COPY --from=builder --chown=nextjs:nodejs /app/apps/${APP_NAME}/public/* /app/.next/sw.js* /app/.next/worker-*.js /app/.next/workbox-*.js /app/.next/fallback-*.js ./public/
# COPY --from=builder --chown=nextjs:nodejs /app/apps/${APP_NAME}/styles styles/

# Expose the listening port
EXPOSE 3000

CMD ["node", "apps/xi.front/server.js"]
# CMD ["npm", "run", "start"]

# apps/xi.front:
# total 80
# -rwxr-xr-x    1 root     root         11558 Dec 27 19:50 LICENSE.md
# -rwxr-xr-x    1 root     root          1424 Dec 27 19:50 README.md
# drwxr-xr-x   10 root     root          4096 Dec 27 19:50 components
# drwxr-xr-x   10 root     root          4096 Dec 27 19:50 kit
# drwxr-xr-x    2 root     root          4096 Dec 27 19:50 models
# -rwxr-xr-x    1 root     root           206 Dec 27 19:50 next-env.d.ts
# -rwxr-xr-x    1 root     root          1617 Dec 27 19:50 next.config.js
# drwxr-xr-x    7 root     root          4096 Dec 27 20:23 node_modules
# -rwxr-xr-x    1 root     root          2468 Dec 27 20:09 package.json
# drwxr-xr-x    8 root     root          4096 Dec 27 19:50 pages
# drwxr-xr-x    1 root     root          4096 Dec 27 20:25 public
# -rwxr-xr-x    1 root     root           807 Dec 27 19:50 server.js
# drwxr-xr-x    2 root     root          4096 Dec 27 19:50 socket
# drwxr-xr-x    6 root     root          4096 Dec 27 19:50 store
# drwxr-xr-x    2 root     root          4096 Dec 27 19:50 styles
# -rwxr-xr-x    1 root     root           186 Dec 27 19:50 tsconfig.json
# drwxr-xr-x    2 root     root          4096 Dec 27 19:50 utils
# drwxr-xr-x    2 root     root          4096 Dec 27 19:50 worker

# Random cache directory, huh?
# RUN mkdir -p .next/cache && chmod -R 777 .next/cache
# RUN mkdir -p /app/.next/cache/images
