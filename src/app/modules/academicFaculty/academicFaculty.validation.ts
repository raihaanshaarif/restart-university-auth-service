import { z } from 'zod';

const createAcademicFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
      invalid_type_error: 'Title must be a string',
    }),
  }),
});

export default createAcademicFacultyZodSchema;
