import { Request, RequestHandler, Response } from 'express';
import { usersService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { user } = req.body;
    const result = await usersService.createUser(user);

    // res.status(200).json({
    //   success: true,
    //   message: 'User Created Successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Created Successfully',
      data: result,
    });
  },
);

export const UserController = {
  createUser,
};
