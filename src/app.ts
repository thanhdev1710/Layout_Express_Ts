import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import { corsOptions, limiter, URL_API_V1 } from "./global/settingApp";
import GlobalError from "./middlewares/GlobalError";
import AppError from "./utils/error/AppError";
import { HTTP_STATUS } from "./response/httpStatusCode";

import routerTest from "./routes/test.route";

const app: Application = express();

// ==============================
// Middleware cấu hình hệ thống
// ==============================
app.use(helmet()); // Bảo mật HTTP headers
app.use(cors(corsOptions)); // Cấu hình CORS
app.use(limiter); // Giới hạn số lượng request
app.use(cookieParser()); // Parse cookie
app.use(express.json({ limit: "10mb" })); // Parse JSON body với giới hạn dung lượng
app.use((req, res, next) => {
  (req as any).requestTime = new Date().toISOString(); // Ghi lại thời gian request
  // Thêm tuỳ ý
  next();
});

// ==============================
// Khai báo route
// ==============================
app.use(`${URL_API_V1}/test`, routerTest);

// ==============================
// Xử lý route không tồn tại
// ==============================
app.all("*path", (req: Request, res: Response, next: NextFunction) => {
  next(
    new AppError(
      `Không tìm thấy đường dẫn ${req.originalUrl} trên server`,
      HTTP_STATUS.NOT_FOUND
    )
  );
});

// ==============================
// Middleware xử lý lỗi toàn cục
// ==============================
app.use(GlobalError);

export default app;
