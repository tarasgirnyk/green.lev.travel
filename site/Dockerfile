FROM node:24-alpine AS base
RUN apk add --no-cache libc6-compat && corepack enable pnpm

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# NEXT_PUBLIC_* вбудовуються під час збірки.
ARG NEXT_PUBLIC_SERVER_URL=https://lev.plus
ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL NEXT_TELEMETRY_DISABLED=1
# Секрет лише для збірки; справжній передається під час запуску.
RUN PAYLOAD_SECRET=build-only-secret pnpm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3000 HOSTNAME=0.0.0.0
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
RUN mkdir .next media && chown nextjs:nodejs .next media
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
