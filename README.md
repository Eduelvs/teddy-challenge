# 🧸 Teddy Challenge — Micro Frontend App

Desafio técnico Front-End Pleno com React, TypeScript, Vite, CSS e arquitetura de **micro frontends** em monorepo.

## 📁 Estrutura do projeto

```bash
teddy-challenge/
├── apps/
│   ├── shell/       # App principal (login e roteamento)
│   └── clientes/    # Microfrontend com CRUD de clientes
├── packages/
│   └── ui/          # (opcional) Design system compartilhado
├── pnpm-workspace.yaml
└── package.json
````

## 🚀 Tecnologias utilizadas

* React
* Vite
* TypeScript
* pnpm workspaces
* Axios
* Docker (para containerização)
* Tailwind CSS
* React Router DOM
* Vercel (para deploy)
* Conventional Commits
* ESLint e Prettier (para formatação e linting de código)
* Vitest (para testes unitários)


## 🧭 Como rodar o projeto localmente

### Pré-requisitos

* Node.js (v18+)
* pnpm (v8+)
* Git
* Docker (opcional, para containerização)
* Conta na Vercel (opcional, para deploy)
## 🛠️ Configuração do ambiente
Certifique-se de ter o Node.js e o pnpm instalados. Você pode verificar as versões com:

```bash
node -v
pnpm -v
git --version
```
Se não tiver o pnpm instalado, instale com:

```bash
npm install -g pnpm
```
Se você não tiver o Node.js instalado, siga as instruções em [nodejs.org](https://nodejs.org/).

Se você não tiver o git instalado, siga as instruções em [git-scm.com](https://git-scm.com/).

## 📦 Instalação e execução

### Passos

Clone o repositório

```bash
git clone https://github.com/Eduelvs/teddy-challenge.git
cd teddy-challenge
```

Instale as dependências

```bash
pnpm install
```

Rode os apps individualmente

```bash
pnpm --filter shell dev
pnpm --filter clientes dev
```

Acesse em:

* [http://localhost:5173](http://localhost:5173) → Shell
* [http://localhost:5174](http://localhost:5174) → Clientes

## 🐳 Docker

```bash
# Exemplo básico
docker build -t teddy-shell ./apps/shell
docker run -p 5173:4173 teddy-shell
```

## Acesse também no Vercel 🌐💻

* https://teddy-challenge-shell.vercel.app

## 📦 Commits com padrão

Este projeto segue o padrão Conventional Commits, utilize os prefixos:

`feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`, etc.

## 📋 Status do projeto

### ✅ Já feito

* CRUD completo de clientes
* Responsividade
* Integração com API pública do teste
* Tela inicial com login
* Dockerfile
* Deploy na Vercel
* Estrutura de micro frontends
* Roteamento SPA com fallback para Vercel
* Testes unitários
* Configuração de ESLint e Prettier


### ❓ O que falta
* Adicionar mais micro frontends
* Adicionar teste end-to-end
* Adicionar Husky e Commitlint (para garantir padrão de commits)
* React Query (para gerenciamento de estado e cache)
* Zustand (para gerenciamento de estado)
* Yup (para validação de formulários)
* React Helmet (para SEO)
* React Testing Library (para testes de componentes)

## 📝 Contribuindo
Se você quiser contribuir, sinta-se à vontade para abrir issues ou pull requests. Toda ajuda é bem-vinda!

## 👨‍💻 Autor

Desenvolvido por Eduardo Alves

