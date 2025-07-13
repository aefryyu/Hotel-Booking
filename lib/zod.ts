import {z} from "zod";

export const ContactSchema = z.object({
    name: z.string().min(6, "Name minimum is 6 characters long"),
    email: z.string().min(6, "Email minimum is 6 characters long ").email("please enter a valid email"),
    subject: z.string().min(6, "Subject minimum is 6 characters long"),
    message: z.string().min(10, "Message minimum is 10 characters long").max(200, "Message maximum is 200 character"),
})