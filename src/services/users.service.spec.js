import { userByEmail } from "./users.service";

test("returns user by email", async () => {
  const user = await userByEmail("amir.zad@contractika.com");
  expect(user.email).toBe("amir.zad@contractika.com");
});
