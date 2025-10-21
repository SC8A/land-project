import { sql } from "slonik";
import { GlobalServerObjects } from "~~/server/middleware/globalObjects";
import * as z from "zod";
import { zodOwners } from "./../../../shared/utils/zodTypes";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const parsed = zodOwners.safeParse(body);

  if (!parsed.success)
    throw createError({
      statusCode: 400,
      statusMessage: "Could not parsed the body",
    });
  try {
    await GlobalServerObjects.databasePool?.query(sql.type(zodOwners)`
       INSERT INTO owners (
        identification_type,
        identification_number,
        name,
        last_name,
        second_last_name
      )
      VALUES (
        ${parsed.data.identification_type},
        ${parsed.data.identification_number},
        ${parsed.data.name},
        ${parsed.data.last_name},
        ${parsed.data.second_last_name}
      );
    `);

    return { status: 200, message: "Owner inserted successfully" }; //
  } catch (err) {
    console.error("DB Insert Error:", err);
    throw createError({
      statusCode: 400,
      statusMessage: "Could insert the new owner",
    });
  }
});
