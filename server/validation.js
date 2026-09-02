import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  contact: z.string().trim().min(5).max(255),
  interest: z.enum(['land', 'investment', 'presentation', 'consultation', 'partnership']),
  website: z.string().max(255).optional().default(''),
});
