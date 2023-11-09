import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();
//Create Document
router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester,
);

// Update Document
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  AcademicSemesterController.updateSemester,
);

//Single Document
router.get('/:id', AcademicSemesterController.getSingleSemester);

//Delete Document
router.delete('/:id', AcademicSemesterController.deleteSemester);

//Get All
router.get('/', AcademicSemesterController.getAllSemesters);

export const AcademicSemesterRoutes = router;
