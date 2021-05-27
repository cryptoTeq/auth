import "dotenv/config";
import Config from "./config";
import Express from "express";
import { authMiddleware } from "./auth.middleware";
import {
  healthCheck,
  login,
  logout,
  refreshTokenHandler,
  root,
  getPosts,
} from "./controllers";

const { PORT } = Config;
const server = Express();
server.use(Express.json());

server.get("/", root);
server.get("/health-check", healthCheck);
server.post("/login", login);
server.post("/logout", logout);
server.post("/refresh-token", refreshTokenHandler);

server.get("/posts", authMiddleware, getPosts);

server.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
