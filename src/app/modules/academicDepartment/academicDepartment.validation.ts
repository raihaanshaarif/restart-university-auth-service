import { z } from 'zod';

export const createAcademicDepartmentZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
      invalid_type_error: 'Title must be a string',
    }),
    academicFaculty: z.string({
      required_error: 'Academic Faculty is required',
      invalid_type_error: 'Academic Faculty must be a string',
    }),
  }),
});
