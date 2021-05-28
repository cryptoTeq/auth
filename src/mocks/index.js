const axios = require("axios").default;
var MockAdapter = require("axios-mock-adapter");
const mockAdapter = new MockAdapter(axios);

import usersApi from "./usersApi.mock";

export default mockAdapter;
export const mockAll = () => [...usersApi(mockAdapter)];
