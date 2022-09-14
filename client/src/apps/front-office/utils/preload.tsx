import Is from "@mongez/supportive-is";
import { AxiosResponse } from "axios";
import LoadingErrorHandler from "design-system/components/Indicators/LoadingErrorHandler";
import { useEffect, useState } from "react";

export type PreloadRequest = (props: any) => Promise<AxiosResponse>;

/**
 * Load the given request(s) then render the given component once the response is loaded.
 * This utility accept single request or an array of requests.
 * the response of the request is sent to the given component alongside with the passed props.
 *
 * Example Of Usage
 *
 *  const HomePage = preload(HomeContent, () => getHome());
 *
 * export default HomePage;
 *
 * function HomeContent({response}: {response: AxiosResponse}) {
 *  return <div>{response.data.message}</div>;
 * }
 */
export default function preload(
  Component: React.ComponentType,
  request: PreloadRequest | PreloadRequest[],
  morePropsToPass: any = {},
): React.FC<any> {
  return function LoadComponent(props: any) {
    const [isLoading, loading] = useState(true);
    const [error, setError] = useState<any | null>(null);
    const [response, setResponse] = useState<any | any[]>(null);

    useEffect(() => {
      if (Is.array(request)) {
        Promise.all(request.map(data => data(props))).then(
          responses => {
            setResponse(responses);
            loading(false);
          },
          error => {
            setError(error);
            loading(false);
          },
        );
      } else {
        request(props)
          .then(response => {
            setResponse(response);
            loading(false);
          })
          .catch(error => {
            setError(error);
            loading(false);
          });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [request]);

    if (isLoading || error) {
      return <LoadingErrorHandler isLoading={isLoading} error={error} />;
    }

    return <Component {...props} {...morePropsToPass} response={response} />;
  };
}
