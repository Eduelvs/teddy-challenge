# Stage 1: Build
FROM node:18-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY . .

# Instala todas as dependências (prod + dev)
RUN pnpm install

# Build só do pacote shell
RUN pnpm --filter shell build

# Stage 2: Produção
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/apps/shell/dist ./dist
COPY --from=builder /app/apps/shell/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

RUN npm install -g serve

EXPOSE 4173


CMD ["serve", "-s", "dist", "-l", "4173"]
