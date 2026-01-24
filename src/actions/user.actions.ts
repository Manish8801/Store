"use server";

import { SALT_ROUNDS } from "@/lib/constants";
import { prisma } from "@/lib/prisma";
import { signInFormSchema, signUpFormSchema } from "@/lib/validators";
import { hashSync } from "bcrypt-ts-edge";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { signIn, signOut } from "../../auth";
import { formatError } from "@/lib/utils";

export const signInWithCredentials = async (
  prevState: unknown,
  formData: FormData,
) => {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    await signIn("credentials", user);
    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return { success: false, message: "Invalid email or password" };
  }
};

export const signOutUser = async () => {
  await signOut();
};

export const signUpUser = async (prevState: unknown, formData: FormData) => {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });
    const plainPassword = user.password;
    user.password = hashSync(user.password, SALT_ROUNDS);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    await signIn("credentials", {
      email: user.email,
      password: plainPassword,
    });

    return { success: true, message: "Signed up successfully" };
  } catch (err) {
    if (isRedirectError(err)) throw err;
    return { success: false, message: formatError(err) };
  }
};
