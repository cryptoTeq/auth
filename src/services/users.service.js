const axios = require("axios").default;

const usersPrefrencesDb = {
  "4bfcfa19-6d00-4a23-8549-d5cf55f4a0ff": {
    theme: "dark",
    verified: false,
    currencySign: "$",
    currencyCode: "USD",
    locale: "en",
    profileImage: "",
  },
};

//export const userBy = async ({ email, password }) => usersDb[email];
export const userBy = async ({ email, password }) => {
  const { data } = await axios.post(`/backend/users`, {
    email,
    password,
  });
  return data;
};
export const settingsBy = async (userId) => {
  const { data } = await axios.post(`/backend/users/${userId}/settings`);
  return data;
};
