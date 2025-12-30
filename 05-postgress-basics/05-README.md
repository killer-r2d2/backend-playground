## Day 5 — Postgres basics (no ORM yet)

Build a tiny Node/TypeScript API that talks to Postgres **directly via `pg`** (no ORM) and exposes two endpoints:

- **POST `/users`**: create a user
- **GET `/users`**: list users

---

## Learning goals

- **Understand core relational concepts**: tables, rows, primary keys, constraints
- **Run Postgres locally with Docker Compose**
- **Connect from Node using `pg`** and run parameterized SQL safely
- **Model a minimal `users` table** and interact with it via an API

---

## Prerequisites

- **Docker Desktop** (or Docker Engine) installed and running
- **Node.js + npm** installed

---

## Project structure (what to look at)

- `docker-compose.yml`: Postgres container + exposed port
- `src/db.ts`: database client/pool setup
- `src/server.ts`: express server boot
- `src/routes/user.routes.ts`: route wiring
- `src/controllers/user.controller.ts`: request/response handling
- `src/services/user.service.ts`: SQL queries (business logic layer)

---

## Quick start (recommended flow)

### 1) Start Postgres

From this folder (`05-postgress-basics/`):

```bash
docker compose up -d
```

Optional checks:

```bash
docker compose ps
docker compose logs -f
```

### 2) Install dependencies

```bash
npm install
```

### 3) Configure environment

This project expects a Postgres connection string (commonly `DATABASE_URL`).

- **If you already have one configured**, great — keep using it.
- **If you don’t**, create a `.env` file in this folder and set the connection string that matches your `docker-compose.yml`.

Example:

```bash
DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres
```

> If your compose file uses different credentials/DB name/port, update the URL accordingly.

### 4) Create the `users` table

Run this SQL against the database:

```sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

Where to run it:

- **Option A (psql inside Docker)**: exec into the container and run `psql`
- **Option B (DB GUI)**: TablePlus / DBeaver / Postico

### 5) Start the API

```bash
npm run dev
```

---

## API endpoints

### POST `/users`

Creates a user.

Request body:

```json
{ "email": "hello@example.com" }
```

Example:

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"email":"hello@example.com"}'
```

### GET `/users`

Lists users.

Example:

```bash
curl http://localhost:3000/users
```

---

## Notes / concepts to internalize

- **Primary key**: stable unique identifier for a row (`id`)
- **Unique constraint**: prevents duplicate emails
- **`created_at` default**: database-generated timestamps are more reliable than client-generated ones
- **Parameterized queries**: avoid SQL injection (never string-concatenate user input into SQL)

---

## Stretch goals (optional)

- **Validation**: reject invalid emails with clear error messages
- **Better errors**: handle unique constraint violations (duplicate email) cleanly
- **Pagination**: add `?limit=...&offset=...` to `GET /users`
- **Health check**: add `GET /health` that verifies DB connectivity
