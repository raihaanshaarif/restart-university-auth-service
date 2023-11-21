import { Model, Types } from 'mongoose';
import { IManagementDepartment } from '../managementDepartment/managementDepartment.interface';

export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type IAdmin = {
  id: string;
  name: UserName; //embedded object
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  gender: 'Male' | 'Female';
  presentAddress: string;
  permanentAddress: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  managementDepartment: Types.ObjectId | IManagementDepartment; // reference _id
  designation: string;
  profileImage?: string;
};
// const StudentModel = Model<IStudent, Record<String, unknown>>;
export type AdminModel = Model<IAdmin, Record<string, unknown>>;

export type IAdminFilters = {
  searchTerm?: string;
  id?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
};
