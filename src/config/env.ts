import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const PORT = process.env.PORT || 3000;

export const env = {
  port: Number(PORT),
  nodeEnv: process.env.NODE_ENV || "development",
};
