import { int, SQLiteBoolean, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
  id: int().primaryKey({ autoIncrement: true }),
  username: text().notNull(),
  password: text().notNull(),
  email: text().notNull().unique(),
  active: int({ mode: "boolean" }).default(true),
  createdAt: int("created_at"),
  updatedAt: int("updated_at"),
  deletedAt: int("deleted_at"),
});
