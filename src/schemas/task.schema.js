//this documento use the library of zod for validator the data received by the server for the tasks
import {z} from 'zod';

export const createTaskSchema = z.object({

    nametask: z.string({
        required_error: "The namestask es required"
    }),
    description: z.string({
        required_error:"The description is requiered"
    }),
    deadline: z.string({
        required_error:"The date must be string"
    })

});