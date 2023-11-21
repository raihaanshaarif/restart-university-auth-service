import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../interfaces/common';
import { IPaginationOptions } from '../../interfaces/pagination';
import { managementDepartmentSearchableFields } from './managementDepartment.constant';
import {
  IManagementDepartment,
  IManagementFilters,
} from './managementDepartment.interface';
import { ManagementDepartment } from './managementDepartment.model';

const createManagementDepartment = async (
  payload: IManagementDepartment,
): Promise<IManagementDepartment | null> => {
  const result = await ManagementDepartment.create(payload);
  return result;
};

const getAllManagementDepartment = async (
  filters: IManagementFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<IManagementDepartment[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: managementDepartmentSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  // const andConditions = [
  //   {
  //     $or: [
  //       {
  //         title: {
  //           $regex: searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //       {
  //         code: {
  //           $regex: searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //       {
  //         year: {
  //           $regex: searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //     ],
  //   },
  // ];

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereCondition =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await ManagementDepartment.find(whereCondition)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await ManagementDepartment.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleanagementDepartment = async (
  id: string,
): Promise<IManagementDepartment | null> => {
  const result = await ManagementDepartment.findById(id);
  return result;
};

const updateManagentDepartment = async (
  id: string,
  managementData: Partial<IManagementDepartment>,
): Promise<IManagementDepartment | null> => {
  const result = await ManagementDepartment.findByIdAndUpdate(
    id,
    managementData,
    {
      new: true,
    },
  );

  return result;
};

const deleteManagementDepartment = async (
  id: string,
): Promise<IManagementDepartment | null> => {
  const result = await ManagementDepartment.findByIdAndDelete(id);
  return result;
};
export const ManagementDepartmentService = {
  createManagementDepartment,
  getAllManagementDepartment,
  getSingleanagementDepartment,
  updateManagentDepartment,
  deleteManagementDepartment,
};
