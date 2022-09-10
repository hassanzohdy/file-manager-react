import { BasicComponentProps } from "../../utils/types";

/**
 * The root should be used with react-router's configuration for rootComponent.
 * So it will wrap the entire app.
 * It can be useful for single operations as this component will only render once in the entire application life cycle.
 * You may for instance fetch settings from the server before loading the app or a Bearer token to work with the API.
 */
export default function Root({ children }: BasicComponentProps) {
  return <>{children}</>;
}
