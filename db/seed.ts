import { prisma } from "@/lib/prisma";
import sampleData from "./sample-data";

(async () => {
  const startTime = performance.now();
  await prisma.$transaction(async (tx) => {
    console.log("  🧹 Cleaning tables...");
    await tx.product.deleteMany();
    await tx.verificationToken.deleteMany();
    await tx.session.deleteMany();
    await tx.account.deleteMany();
    await tx.user.deleteMany();

    console.log("  🌱 Seeding sample data...");
    await tx.product.createMany({ data: sampleData.products });
    await tx.user.createMany({ data: sampleData.users });
  });
  console.log("Seeding took", (performance.now() - startTime) / 1000, "s");
})();