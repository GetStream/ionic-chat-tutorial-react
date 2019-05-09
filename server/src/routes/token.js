import { token } from "../controllers/v1/token";

import { wrapAsync } from "../utils/controllers";

module.exports = api => {
  api.route("/v1/token").post(wrapAsync(token));
};
