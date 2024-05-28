"use server";

import * as z from "zod";
import bcryptjs from "bcryptjs";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcryptjs.hash(password, 10);

  const exsistingUser = await getUserByEmail(email);

  if (exsistingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: send verification token email

  return { success: "User created!" };
};
