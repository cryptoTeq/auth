import { mockAll } from "../mocks";
import { userBy } from "./users.service";

beforeAll(async () => {
  mockAll();
});

const user = {
  username: "USERNAME",
  email: "NAME.LAST@DOMAIN.com",
  password: "PASSWORD",
  firstName: "FIRSTNAME",
  lastName: "LASTNAME",
};

test("returns user by email and password", async () => {
  const { email, password, firstName } = user;
  const fetchUser = await userBy({ email, password });
  expect(fetchUser.email).toBe(email);
  expect(fetchUser.firstName).toBe(firstName);
});
