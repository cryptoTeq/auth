import { userBy } from "./users.service";

test("returns user by email", async () => {
  const user = await userBy({
    email: "amir.zad@contractika.com",
    password: "myPassword",
  });
  expect(user.email).toBe("amir.zad@contractika.com");
  expect(user.firstName).toBe("Amir Mohsen");
});
