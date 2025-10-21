import z from "zod";

export const zodOwners = z.object({
  id: z.number().optional(),
  identification_type: z.string().min(1),
  identification_number: z.string().min(1),
  name: z.string().min(1),
  last_name: z.string().min(1),
  second_last_name: z.string().min(1),
});
