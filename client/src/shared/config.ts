import { EncryptedLocalStorageDriver } from "@mongez/cache";
import { ApplicationConfigurations, setAppConfigurations } from "@mongez/react";
import uk from "assets/images/flags/uk.png";
import AES from "crypto-js/aes";
import Root from "design-system/layouts/Root";

const appConfigurations: ApplicationConfigurations = {
  localization: {
    defaultLocaleCode: process.env.REACT_APP_DEFAULT_LOCALE_CODE,
    fallback: process.env.REACT_APP_FALLBACK_LOCALE_CODE,
    locales: {
      en: {
        direction: "ltr",
        name: "English",
        flag: uk, // optional
      },
    },
  },
  encryption: {
    key: process.env.REACT_APP_CODE_NAME,
    driver: AES,
  },
  cache: {
    // make the cache prefix with the app code name, append the branch name (if exists)
    prefix:
      process.env.REACT_APP_CODE_NAME +
      ((process.env.NODE_ENV === "development" &&
        process.env.REACT_APP_BRANCH_NAME) ||
        ""),
    driver: new EncryptedLocalStorageDriver(),
  },
  helmet: {
    appName: process.env.REACT_APP_NAME,
    appendAppName: true,
    appNameSeparator: " | ",
    translatable: true,
    translateAppName: true,
  },
  router: {
    basePath: process.env.REACT_APP_PRODUCTION_BASE_PATH,
    notFound: {
      mode: "redirect",
      route: "/404",
    },
    // to set a preloader between the router navigation, pass it to the `preloader` property
    // preloader: Preloader,
    // will wrap the entire application
    rootComponent: Root,
  },
  endpoint: {
    // will convert any PUT request to a POST request with a body of the form: and append _method=PUT to the body
    // whether the request body is object, FormElement or FormData
    putToPost: true,
    baseUrl: process.env.REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY,
  },
};

setAppConfigurations(appConfigurations);
