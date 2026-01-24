import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { DATABASE_URL } from "./constants/index";

const adapter = new PrismaPg({ connectionString: DATABASE_URL });
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

export { prisma };
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
