// this is the recommended way to define your route definitions and calls in the application
// instead of just adding the route statically to the Link component
const URLS = {
  home: "/",
  contactUs: "/contact-us",
  aboutUs: "/about-us",
  privacyPolicy: "/privacy-policy",
  termsConditions: "/terms-conditions",
  viewProduct: (product: any) => `/product/${product.id}`,
  viewProductRoute: "/product/:id",
  // append urls here, DO NOT remove this line
};

export default URLS;
