import { array, boolean, coerce, object, string } from "zod";
import { formatPrice } from "./utils";


export const currency = string().refine(
  (value) => /^\d+(\.\d{2})?$/.test(formatPrice(Number(value))),
  "Price must have exactly two decimal places",
);
export const insertProductSchema = object({
  name: string().min(3, "Name must be at least 3 characters"),
  slug: string().min(3, "Slug must be at least 3 characters"),
  category: string().min(3, "Category must be at least 3 characters"),
  brand: string().min(3, "Brand must be at least 3 characters"),
  description: string().min(3, "Description must be at least 3 characters"),
  stock: coerce.number(),
  images: array(string()).min(1, "Product must have at least 1 product"),
  isFeatured: boolean(),
  banner: string().optional(),
  price: currency,
});
