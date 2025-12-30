import { pool } from "../db";

export async function createUser(email: string) {
  const result = await pool.query(
    "INSERT INTO users (email) VALUES ($1) RETURNING *",
    [email]
  );

  return result.rows[0];
}

export async function getUsers() {
  const result = await pool.query(
    "SELECT id, email, created_at FROM users ORDER BY created_at DESC"
  );

  return result.rows;
}
