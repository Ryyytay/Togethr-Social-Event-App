import { z } from 'zod';
import { requiredString } from '../util/util';

export const activitySchema = z.object({
    title: requiredString('Title'),
    description: requiredString('Description'),
    category: requiredString('Category'),
    date: z.coerce.date({
        message: 'Date is required',
    }),
    location: z.object({
        venue: requiredString('Venue'),
        city: requiredString('City'),
        latitude: z.coerce.number(),
        longitude: z.coerce.number(),
    })
})

export type ActivitySchema = z.infer<typeof activitySchema>;