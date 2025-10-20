import { sql } from "slonik";
import { GlobalServerObjects } from "~~/server/middleware/globalObjects";
import * as z from "zod";

export default defineEventHandler(async (event) => {
  // to consider de param in the future consults
  const Owners = z.object({
    id: z.number(),
    identification_type: z.string(),
    identification_number: z.string(),
    name: z.string(),
    last_name: z.string(),
    second_last_name: z.string(),
  });

  try {
    const orders = await GlobalServerObjects.databasePool?.any(sql.type(Owners)`
       SELECT * FROM owners
    `);

    if (!orders) return [];

    return orders;
  } catch {
    return [];
  }
});
