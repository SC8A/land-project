import { GlobalServerObjects } from "../middleware/globalObjects";

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("close", async () => {
    if (GlobalServerObjects.databasePool)
      await GlobalServerObjects.databasePool.end();
  });
});
