import { publicRoutes } from "app/utils/router";
import URLS from "app/utils/urls";
import HomePage from "./components/HomePage";

publicRoutes([
  {
    path: URLS.home,
    component: HomePage,
  },
]);
