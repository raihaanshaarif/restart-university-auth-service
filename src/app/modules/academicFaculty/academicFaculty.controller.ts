import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IAcademicFaculty } from './academicFaculty.interface';
import httpStatus from 'http-status';
import { AcademicFacultyService } from './academicFaculty.service';
import { academicFacultyFilterableFields } from '../academicSemester/academicSemester.constant';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const { ...academicFacultyData } = req.body;
  const result =
    await AcademicFacultyService.createFaculty(academicFacultyData);

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty Created Successfully',
    data: result,
  });
});

// Get All Faculty
const getFaculty = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicFacultyFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await AcademicFacultyService.getFaculty(
    filters,
    paginationOptions,
  );

  sendResponse<IAcademicFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties Retrived successfully',
    data: result,
  });
});
// Get Single Faculty

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AcademicFacultyService.getSingleFaculty(id);

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties Retrived successfully',
    data: result,
  });
});

//Update Faculty
const updateFaculty = catchAsync(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const result = await AcademicFacultyService.updateFaculty(id, body);

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty Updated successfully',
    data: result,
  });
});

//Delete Faculty
const deteleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AcademicFacultyService.deteleFaculty(id);

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty Deleted successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  createFaculty,
  getFaculty,
  getSingleFaculty,
  updateFaculty,
  deteleFaculty,
};
