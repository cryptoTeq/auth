import { login as loginService } from "../services/auth.service";
import jwt from "jsonwebtoken";

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
  const accessToken = await loginService(email, password);
  if (!accessToken) return res.json({ ok: false });
  res.json({ ok: true, accessToken });
};
export const logout = async (req, res) => {};
export const refreshToken = async (req, res) => {};
