import { z } from "zod";
import { requiredString } from "../util/util";

export const registerSchema = z.object({
    email: z.string().email(),
    displayName: requiredString('displayName'),
    password: requiredString('password')
})

export type registerSchema = z.infer<typeof registerSchema>;