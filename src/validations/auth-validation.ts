import z from "zod";

export const loginSchemaForm = z.object({
  email: z
    .string()
    .min(1, "Email diperlukan")
    .email("Silakan masukkan email yang valid"),
  password: z.string().min(1, "Password diperlukan"),
});

export type LoginForm = z.infer<typeof loginSchemaForm>;
