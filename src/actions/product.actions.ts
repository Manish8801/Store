"use server";

import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";
import { prisma } from "@/lib/prisma";
import { convertToPlainObject } from "@/lib/utils";

export const getLatestProducts = async () => {
  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  return convertToPlainObject(products);
};

export const getProductBySlug = async (slug: string) => {
  const product = await prisma.product.findFirst({
    where: { slug },
  });
  return convertToPlainObject(product);
};
