import { verifyToken } from "./services/auth.service";
import { ERROR_CODES } from "./controllers/errorCodes";

const { TOKEN_NOT_FOUND, TOKEN_NOT_VALID } = ERROR_CODES;

export const authMiddleware = ({ headers }, res, next) => {
  const authHeader = headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res.status(401).json({ ok: false, errorCode: TOKEN_NOT_FOUND });
  const validToken = verifyToken(token);
  if (!validToken)
    return res.status(403).json({ ok: false, errorCode: TOKEN_NOT_VALID });
  console.log("Valid Token");
  next();
};
