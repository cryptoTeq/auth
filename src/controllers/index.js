import { login as loginService } from "../services";

export const root = (req, res) => {
  res.json({ ok: true });
};

export const healthCheck = (req, res) => {
  res.json({ ok: true });
};

export const login = async (req, res) => {
  console.log(req.body);
  res.json({ ok: true });
};
export const logout = async (req, res) => {};
export const refreshToken = async (req, res) => {};
