import jwt from "jsonwebtoken";
import Config from "../config";

const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRATION } = Config;

const refreshTokens = {};

//TODO: add validation using class validator
export const newToken = ({ key, payload }) => {
  try {
    const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
      expiresIn: `${ACCESS_TOKEN_EXPIRATION}`,
    });
    const refreshToken = jwt.sign(payload, ACCESS_TOKEN_SECRET);
    refreshTokens[key] = true;
    return { accessToken, refreshToken };
  } catch (e) {
    return;
  }
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, ACCESS_TOKEN_SECRET);
  } catch (e) {
    return;
  }
};

export const refreshToken = (token) => {
  try {
    const payload = verifyToken(token);
    if (!payload) return;
    const { username, firstName, lastName } = payload;
    if (!refreshTokens[username]) return;
    return jwt.sign({ username, firstName, lastName }, ACCESS_TOKEN_SECRET, {
      expiresIn: `${ACCESS_TOKEN_EXPIRATION}`,
    });
  } catch (e) {
    return;
  }
};

export const removeToken = (token) => {
  const payload = verifyToken(token);
  if (!payload) return false;
  const { username } = payload;
  delete refreshTokens[username];
  return true;
};
