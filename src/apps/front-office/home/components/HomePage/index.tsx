import { useRequest } from "@mongez/react";
import Helmet from "@mongez/react-helmet";
import LoadingErrorHandler from "app/design-system/components/Indicators/LoadingErrorHandler";
import { getHome } from "../../services/home-service";

export default function HomePage() {
  const { error, isLoading } = useRequest(() => getHome());

  if (error || isLoading) {
    return <LoadingErrorHandler isLoading={isLoading} error={error} />;
  }

  return (
    <>
      <Helmet title="home" appendAppName={false} />
      <h1>Welcome To Home Page</h1>
    </>
  );
}
