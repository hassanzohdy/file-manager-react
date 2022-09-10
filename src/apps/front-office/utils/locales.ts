// to know more about localization
// @see https://github.com/hassanzohdy/mongez-localization

import { extend, groupedTranslations } from "@mongez/localization";
import { arTranslation, enTranslation } from "@mongez/validator";

// useful for validation errors for form inputs

extend("en", enTranslation);
extend("ar", arTranslation);

// Add only common localization
groupedTranslations({
  loading: {
    en: "Loading...",
    ar: "جار التحميل...",
  },
  home: {
    en: "Home",
    ar: "الرئيسية",
  },
  somethingWentWrong: {
    en: "Something Went wrong, please try again later.",
    ar: "حدث خطأ ما, من فضلك حاول مرة أخرى في وقت لاحق.",
  },
  errorHeading: {
    en: "Error!",
    ar: "خطأ!",
  },
  accessDenied: {
    en: "Access Denied!",
    ar: "غير مصرح لك بدخول هذه الصفحة!",
  },
  notFoundPage: {
    en: "Not Found Page",
    ar: "الصفحة المطلوبة غير موجودة",
  },
});
