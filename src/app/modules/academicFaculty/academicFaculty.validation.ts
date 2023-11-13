import { z } from 'zod';

export const createAcademicFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
      invalid_type_error: 'Title must be a string',
    }),
  }),
});

export const updateAcademicFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
      invalid_type_error: 'Title must be a string',
    }),
  }),
});
