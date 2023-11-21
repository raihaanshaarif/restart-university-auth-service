import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

import { ManagementDepartmentController } from './managementDepartment.controller';
import { ManagementDepartmentValidation } from './managementDepartment.validation';

const router = express.Router();

router.post(
  '/create-management',
  validateRequest(
    ManagementDepartmentValidation.createManagementDepartmentZodSchema,
  ),
  ManagementDepartmentController.createManagementDepartment,
);

router.get('/:id', ManagementDepartmentController.getSingleManagement);
router.get('/', ManagementDepartmentController.getAllManagementDepartment);

router.patch(
  '/:id',
  validateRequest(
    ManagementDepartmentValidation.updateManagentDepartmentZodSchema,
  ),
  ManagementDepartmentController.updateManagentDepartment,
);

router.delete(
  '/:id',
  ManagementDepartmentController.deleteManagementDepartment,
);

export const ManagementDepartmentRoutes = router;
