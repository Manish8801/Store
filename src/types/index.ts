import { insertProductSchema } from "@/lib/validators";
import z from "zod";

export type Product = z.infer<typeof insertProductSchema> & {
  rating: number;
  id: string;
  createdAt: Date;
};
