import { z } from "zod";

const signUpSchema = z
  .object({
    email: z.string().min(1, "Required").email("Invalid email"),
    password: z.string().min(1, "Required"),
    verify_password: z.string().min(1, "Required"),
  })
  .refine((data) => data.password === data.verify_password, {
    message: "Passwords don't match",
    path: ["verify_password"],
  });
export default signUpSchema;

export type SignUpFormData = z.infer<typeof signUpSchema>;
