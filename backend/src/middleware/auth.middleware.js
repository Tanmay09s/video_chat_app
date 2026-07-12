import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

export const protectRoute = async (req, res, next) => {
  try {
    console.log("========== AUTH MIDDLEWARE ==========");

    // Log all cookies
    console.log("Cookies received:", req.cookies);

    // Extract JWT
    const token = req.cookies.jwt;

    if (!token) {
      console.log("No JWT token found in cookies");
      return res.status(401).json({
        success: false,
        message: "Unauthorized - No token provided",
      });
    }

    console.log("JWT Token:", token);

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    console.log("Decoded Token:", decoded);

    // Find User
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      console.log("User not found in database");
      return res.status(401).json({
        success: false,
        message: "Unauthorized - User not found",
      });
    }

    console.log("Authenticated User:", user.email);

    req.user = user;

    console.log("====================================");

    next();
  } catch (error) {
    console.log("AUTH MIDDLEWARE ERROR");
    console.log(error);

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid JWT Token",
      });
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "JWT Token Expired",
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};