import catchAsync from '../../../shared/catchAsync';
import { Request, RequestHandler, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ManagementDepartmentService } from './managementDepartment.service';
import pick from '../../../shared/pick';
import {
  managementDepartmentFilterableFields,
  managementDepartmentSearchableFields,
} from './managementDepartment.constant';

const createManagementDepartment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...managementDepartmentData } = req.body;
    const result = await ManagementDepartmentService.createManagementDepartment(
      managementDepartmentData,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Management Department Created Successfully',
      data: result,
    });
  },
);

const getAllManagementDepartment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, managementDepartmentFilterableFields);
    const paginationOptions = pick(
      req.query,
      managementDepartmentSearchableFields,
    );
    const result = await ManagementDepartmentService.getAllManagementDepartment(
      filters,
      paginationOptions,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Management Department Retrived Successfully',
      data: result,
    });
  },
);

const getSingleManagement: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result =
      await ManagementDepartmentService.getSingleanagementDepartment(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single Management Department Retrived Successfully',
      data: result,
    });
  },
);
const updateManagentDepartment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const managementData = req.body;
    const result = await ManagementDepartmentService.updateManagentDepartment(
      id,
      managementData,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single Management Department Updated Successfully',
      data: result,
    });
  },
);

const deleteManagementDepartment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result =
      await ManagementDepartmentService.deleteManagementDepartment(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single Management Department Deleted Successfully',
      data: result,
    });
  },
);

export const ManagementDepartmentController = {
  createManagementDepartment,
  getAllManagementDepartment,
  getSingleManagement,
  updateManagentDepartment,
  deleteManagementDepartment,
};
