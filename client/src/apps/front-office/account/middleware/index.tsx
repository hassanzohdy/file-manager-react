import { Redirect } from "@mongez/react-router";
import user from "user";

export function Guardian() {
  if (!user.isLoggedIn()) {
    return <Redirect to="/login" />;
  }

  return null;
}

export function ReverseGuardian() {
  if (user.isLoggedIn()) {
    return <Redirect to="/" />;
  }

  return null;
}
