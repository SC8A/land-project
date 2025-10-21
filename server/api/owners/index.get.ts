import { sql } from "slonik";
import { GlobalServerObjects } from "~~/server/middleware/globalObjects";
import * as z from "zod";
import { zodOwners } from "./../../../shared/utils/zodTypes";
export default defineEventHandler(async (event) => {
  try {
    const orders = await GlobalServerObjects.databasePool?.any(sql.type(
      zodOwners
    )`
       SELECT * FROM owners
    `);

    if (!orders) return [];

    return orders;
  } catch {
    return [];
  }
});
