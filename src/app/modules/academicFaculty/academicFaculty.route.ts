import express from 'express';
import { AcademicSemesterController } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';
import {
  createAcademicFacultyZodSchema,
  updateAcademicFacultyZodSchema,
} from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(createAcademicFacultyZodSchema),
  AcademicSemesterController.createFaculty,
);
router.get('/', AcademicSemesterController.getFaculty);
router.get('/:id', AcademicSemesterController.getSingleFaculty);
router.patch(
  '/:id',
  validateRequest(updateAcademicFacultyZodSchema),
  AcademicSemesterController.updateFaculty,
);
router.delete('/:id', AcademicSemesterController.deteleFaculty);

export const AcademicFacultyRoutes = router;
