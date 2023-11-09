import { IAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createFaculty = (
  payload: IAcademicFaculty,
): Promise<IAcademicFaculty> => {
  const result = AcademicFaculty.create(payload);

  return result;
};

const getFaculty = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getSingleFaculty = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

const updateFaculty = async (id: string, payload: IAcademicFaculty) => {
  const result = await AcademicFaculty.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deteleFaculty = async (id: string) => {
  const result = await AcademicFaculty.findByIdAndDelete(id);

  return result;
};

export const AcademicFacultyService = {
  createFaculty,
  getFaculty,
  getSingleFaculty,
  updateFaculty,
  deteleFaculty,
};
