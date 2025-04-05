import AppError from "../utils/error/AppError";

export const getUserById = async (userId: string) => {
  const user = `User id: ${userId}`;

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};
