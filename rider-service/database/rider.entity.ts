import { integer } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const rider = pgTable("riders", {
  id: integer().primaryKey(),
});

export type CreateRider = typeof rider.$inferInsert;
export type SelectRider = typeof rider.$inferSelect;
