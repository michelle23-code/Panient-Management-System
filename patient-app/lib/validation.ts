import { z} from "zod";

 export const UserFormValidation = z.object({
  name: z.string()
  .min(2,"Name must be at least 2 characters.")
  .max(50, "Name must be at most 50 characters."),
email: z.string().email("Invaild email address"),
phone: z.string().refine((phone) => phone.length === 10, 
     "phone number must be 10 digts",
)


  })
