import {
  IManagementDepartment,
  ManagementDepartmentModel,
} from './managementDepartment.interface';
import { Schema, model } from 'mongoose';

export const managementDepartmentSchema = new Schema<
  IManagementDepartment,
  ManagementDepartmentModel
>(
  {
    title: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const ManagementDepartment = model<
  IManagementDepartment,
  ManagementDepartmentModel
>('Management Department', managementDepartmentSchema);
