import productRoute from "../routes/productRoute.js";
import userRoute from "../routes/userRoute.js";
import authRoute from "../routes/authRoute.js";

const indexRoute = (app) => {
  app.use(productRoute);
  app.use(userRoute);
  app.use(authRoute);
};
export default indexRoute;
