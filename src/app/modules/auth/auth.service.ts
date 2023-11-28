import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';

const loginUser = async (payload: ILoginUser) => {
  const { id, password } = payload;

  // Creating instance of User
  // const user = new User();

  // check user existance
  // const isUserExist = await User.findOne(
  //   { id },
  //   { id: 1, password: 1, needsPasswordChange: 1 },
  // ).lean();

  const isUserExist = await User.isUserExist(id);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  //Match password
  // const isPasswordMatch = await bcrypt.compare(password, isUserExist.password);

  // const isPasswordMatch = await user.isPasswordMatch(password, isUserExist.password)
  if (
    isUserExist.password &&
    !(await User.isPasswordMatch(password, isUserExist?.password))
  ) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Password is Incorrect');
  }

  // create access JWT token

  return {};
};

export const AuthService = {
  loginUser,
};
