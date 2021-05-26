import { userByEmail } from "./users.service";
import jwt from "jsonwebtoken";
import Config from "../config";

const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRATION_MIN } = Config;

//TODO: add validation using class validator
export const login = async (email, password) => {
  const user = await userByEmail(email);
  if (!user) return;

  const { username, firstName, lastName } = user;
  try {
    return jwt.sign({ username, firstName, lastName }, ACCESS_TOKEN_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRATION_MIN,
    });
  } catch (e) {
    return;
  }
};
export const logout = async (email) => {};
export const refreshToken = async (token) => {};
