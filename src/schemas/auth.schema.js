//this documento use the library of zod for validator the data received by the server for create one user
import { z } from "zod";

export const createUserSchema = z.object({
    username:z.string().min(4,{
        message: "The username must be at least 4 character"
    }),
    email:z.string().email({
        message :"The email es required"
    }),
    password: z.string().min(6,{
        message: "the password must be at least 6 character"
    })
});

export const loginSchema = z.object({
    email:z.string().email({
        message :"Email incorrect"
    }),
    password: z.string().min(6,{
        message: "The password must be at least 6 character"
    })
})