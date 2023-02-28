import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Custom401 from "./401";
import Custom404 from "./404";
import Custom500 from "./500";

export const ErrorPage: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      return <Custom401 />;
    } else if (error.status === 404) {
      return <Custom404 />;
    } else if (error.status === 500) {
      return <Custom500 />;
    }

    return (
      <div id="error-page">
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  }

  return <>an error occured</>;
};

export default ErrorPage;
