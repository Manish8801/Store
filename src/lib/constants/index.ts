import "dotenv/config";

export const DATABASE_URL =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}?uselibpqcompat=true&sslmode=require`;
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Store";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Modern e-commerce platform built with Next.js";
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 6;
export const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;
