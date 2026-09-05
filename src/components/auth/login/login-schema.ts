import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, "Required").email("Invalid email"),
  password: z.string().min(1, "Required"),
});
export default loginSchema;

export type LoginFormData = z.infer<typeof loginSchema>;
