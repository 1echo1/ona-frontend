import { z } from 'zod';

const signUpSchema = z.object({
  username: z
    .string()
    .min(1,"Required")
    .email("Invalid email"),
  password: z .string().min(1,"Required")
});
export default signUpSchema;

export type SignUpFormData = z.infer<typeof signUpSchema>;
