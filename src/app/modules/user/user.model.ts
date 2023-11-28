import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../../config';

const userSchema = new Schema<IUser, UserModel>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true, select: 0 },
    needsPasswordChange: { type: Boolean, default: true, required: true },
    student: { type: Schema.Types.ObjectId, ref: 'Student' },
    faculty: { type: Schema.Types.ObjectId, ref: 'Faculty' },
    admin: { type: Schema.Types.ObjectId, ref: 'Admin' },
  },
  {
    timestamps: true,
    //To create id without underscore
    toJSON: {
      virtuals: true,
    },
  },
);

// userSchema.methods.isUserExist = async function (
//   id: string,
// ): Promise<Partial<IUser> | null> {
//   return await User.findOne(
//     { id },
//     { id: 1, password: 1, needsPasswordChange: 1 },
//   );
// };

// userSchema.methods.isPasswordMatch = async function (
//   givenPassword: string,
//   savedPassword: string,
// ): Promise<boolean> {
//   const isMatched = await bcrypt.compare(givenPassword, savedPassword);
//   return isMatched;
// };

userSchema.statics.isUserExist = async function (
  id: string,
): Promise<Pick<IUser, 'id' | 'password' | 'needsPasswordChange'> | null> {
  return await User.findOne(
    { id },
    { id: 1, password: 1, needsPasswordChange: 1 },
  );
};

userSchema.statics.isPasswordMatch = async function (
  givenPassword: string,
  savedPassword: string,
): Promise<boolean> {
  const isMatched = await bcrypt.compare(givenPassword, savedPassword);
  return isMatched;
};

userSchema.pre('save', async function (next) {
  //Hash password
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bycrypt_salt_rounds),
  );

  next();
});
export const User = model<IUser, UserModel>('User', userSchema);
