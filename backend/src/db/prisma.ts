import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client.js";

const adapter = new PrismaBetterSqlite3({ url: "file:./prisma/dev.db" });

const prisma = new PrismaClient({
  adapter,
  log: ["query", "error"],
});

export default prisma;
