import { prisma } from "@/lib/prisma";
import sampleData from "./sample-data";

(async () => {
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data: sampleData.products,
  });
})();
