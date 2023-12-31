# Poolworld Document Management

This project made for Poolworld company to manage their documents.

## Introduction

This project is a backend API for Poolworld Document Management. It is built with Node.js, TypeScript, Express.js, Prisma, and PostgreSQL.

## Members

1. 6410401078 ธนฤกษ์ โอเจริญ
2. 6410402121 ภูริต เทพกฤษณ์
3. 6410406568 ณัชพล เรืองนาม
4. 6410406771 ปัณณทัต ด้วงแค
5. 6410406703 นภสมล ศิริบรรจง
6. 6410406878 ศรันย์ภวัต โพธิ์สร้อย

## Getting Started

### Pre-requisites

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/GraphZC/pw-doc-manager-api-ts.git
```

2. Install NPM packages

```sh
npm install
```

3. Create .env file

```sh
cp .env.example .env
```

config your .env file

4. Run docker

```sh
docker compose up -d
```

5. Run migration

```sh
npx prisma migrate dev
```

6. Run seed

```sh
npm run seed
```

## Usage

### Postman

[https://pwdoc-man.postman.co](https://pwdoc-man.postman.co)

### Development

```sh
npm run dev
```

### Production

```sh
npm run build
npm run start
```
