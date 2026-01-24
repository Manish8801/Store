import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObject<T>(value: T) {
  return JSON.parse(JSON.stringify(value));
}

export function formatPrice(num: number) {
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal}`.padEnd(2, "0") : `${int}.00`;
}

// ts-ignore
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function formatError(err: any) {
  if (err.name == "ZodError") {
    const fieldErrors = Object.keys(err.errors).map(
      (field) => err.errors[field].message,
    );
    return fieldErrors.join(". ");
  } else if (
    err.name === "PrismaClientKnownRequestError" &&
    err.code === "P2002"
  ) {
    const field: string = err.meta?.target ? err.meta.target[0] : "Field";
    return field.charAt(0).toUpperCase() + field.slice(1) + " already exists";
  } else {
    return typeof err.message === "string"
      ? err.message
      : JSON.stringify(err.message);
  }
}
