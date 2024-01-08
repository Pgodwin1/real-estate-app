import { AuthRouter } from "./Auth/router";
import { PaymentRouter } from "./Payment/router";

export = {
  auth: {
    routes: AuthRouter,
  },
  payment: {
    routes: PaymentRouter,
  },
};
