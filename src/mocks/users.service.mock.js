export default (mock) => [
  mock.onGet(`${ADMIN_URL}/groups`).reply(200, [
    {
      name: "admin-sme",
      id: "cdf081c9-7d9d-48e9-9ce8-cd86b47b9b85",
      organization: "",
      description: "",
    },
    {
      name: "admin-tester",
      id: "ef6f94c1-d016-4d20-b0fe-877159e9345b",
      organization: "",
      description: "",
    },
    {
      name: "saas-agility",
      id: "3f2dd241-3f8e-4391-a542-7d5b3bda4f0d",
      organization: "",
      description: "",
    },
  ]),

  mock.onPost(`${LOGIN_URL}/auth`).reply(200, {
    access_token: "mock",
    refresh_token: "mock-7d9d-48e9-9ce8-cd86b47b9b85",
  }),
];
