import { newToken, refreshToken, removeToken } from "../services/auth.service";
import { userBy, prefBy } from "../services/users.service";
import { ERROR_CODES } from "./errorCodes";

const { USER_NOT_FOUND, TOKEN_ERROR, TOKEN_NOT_FOUND, TOKEN_NOT_VALID } =
  ERROR_CODES;

export const root = (req, res) => {
  res.json({ ok: true });
};

export const healthCheck = (req, res) => {
  res.json({ ok: true });
};

export const login = async (req, res) => {
  const {
    body: { email, password },
  } = req;
  const user = await userBy({ email, password });
  if (!user)
    return res.status(404).json({ ok: false, errorCode: USER_NOT_FOUND });

  const { username, firstName, lastName } = user;

  const accessToken = newToken({
    key: username,
    payload: { username, firstName, lastName },
  });
  if (!accessToken) return res.json({ ok: false, errorCode: TOKEN_ERROR });
  res.json({
    ok: true,
    ...accessToken,
  });
};

export const logout = async ({ headers }, res) => {
  const authHeader = headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res.status(401).json({ ok: false, errorCode: TOKEN_NOT_FOUND });
  const tokenRemoved = removeToken(token);
  if (!tokenRemoved)
    return res.status(403).json({ ok: false, errorCode: TOKEN_NOT_VALID });
  return res.json({ ok: true });
};

export const refreshTokenHandler = async (req, res) => {
  const {
    body: { token },
  } = req;
  if (!token)
    return res.status(401).json({ ok: false, errorCode: TOKEN_NOT_FOUND });
  const accessToken = refreshToken(token);
  if (!accessToken)
    return res.status(403).json({ ok: false, errorCode: TOKEN_NOT_VALID });
  res.json({ accessToken });
};

export const getPosts = (req, res) => {
  res.json({ ok: "this is my post" });
};
