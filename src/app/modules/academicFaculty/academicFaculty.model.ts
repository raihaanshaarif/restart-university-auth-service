import { Schema, model } from 'mongoose';
import {
  IAcademicFaculty,
  academicFacultyModel,
} from './academicFaculty.interface';

const AcademicFacultySchema = new Schema<IAcademicFaculty>(
  {
    title: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    //To create id without underscore
    toJSON: {
      virtuals: true,
    },
  },
);

export const AcademicFaculty = model<IAcademicFaculty, academicFacultyModel>(
  'AcademicFaculty',
  AcademicFacultySchema,
);
