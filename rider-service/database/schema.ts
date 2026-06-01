import { rider } from "./rider.entity";

export const PGConn = "Postgres";

export const schema = {
  rider,
};

export type Schema = typeof schema;
