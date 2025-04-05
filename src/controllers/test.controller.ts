import { sendResponse } from "../response/apiResponse";
import { HTTP_STATUS } from "../response/httpStatusCode";
import { getUserById } from "../services/test.service";
import CatchAsync from "../utils/error/CatchAsync";

export const getUserByIdController = CatchAsync(async (req, res, next) => {
  const userId = req.params.id;
  const user = await getUserById(userId);

  sendResponse(
    res,
    HTTP_STATUS.OK,
    "Lấy thông tin người dùng thành công",
    user
  );
});
