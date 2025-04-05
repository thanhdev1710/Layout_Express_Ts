import { CorsOptions } from "cors";
import rateLimit from "express-rate-limit";

export const corsOptions: CorsOptions = {
  origin: "*", // Định nghĩa các nguồn gốc được phép
  methods: "GET,POST,PUT,PATCH,DELETE", // Các phương thức HTTP được phép
  allowedHeaders: "Content-Type,Authorization", // Các header được phép
  credentials: true, // Cho phép cookies đi kèm với các yêu cầu CORS
  preflightContinue: false, // Không tiếp tục gửi yêu cầu OPTIONS sau khi preflight
  optionsSuccessStatus: 204, // Mã trạng thái trả về cho preflight request thành công
};

export const limiter = rateLimit({
  limit: 100, // Giới hạn số lượng yêu cầu
  windowMs: 15 * 60 * 1000, // Thời gian giới hạn trong 15 phút
  message: "Too many requests form this IP, please try again in an hour!", // Thông báo khi vượt quá giới hạn
});

export const URL_API_V1 = "/api/v1";
