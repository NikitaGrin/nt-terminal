import { useRouteError } from "react-router-dom";

function PageNotFound() {
  const error = useRouteError();
  console.error(error);

  return <div>Page Not Found</div>;
}

export default PageNotFound;
