import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { createAcademicDepartmentZodSchema } from './academicDepartment.validation';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(createAcademicDepartmentZodSchema),
  AcademicDepartmentController.createDepartment,
);

router.get('/', AcademicDepartmentController.getDepartment);
router.get('/:id', AcademicDepartmentController.getSingleDepartment);
router.patch('/:id', AcademicDepartmentController.updateDepartment);
router.delete('/:id', AcademicDepartmentController.deleteDepartment);

export const AcademicDepartmentRoutes = router;
