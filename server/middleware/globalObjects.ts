import { createPool, type DatabasePool } from "slonik";

export const GlobalServerObjects = {
  databasePool: null as DatabasePool | null,
};

export default defineEventHandler(async (event) => {
    
  if (!GlobalServerObjects.databasePool) {
    const config = useRuntimeConfig();
    GlobalServerObjects.databasePool = await createPool(
  `postgres://${config.dbUser}:${encodeURIComponent(config.dbPassword)}@${config.dbHost}:${config.dbPort}/${config.dbName}`,
);
  }
  event.context.databasePool = GlobalServerObjects.databasePool;
});
