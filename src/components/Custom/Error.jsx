import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">{error.status || 404}</h1>
      <p className="text-lg text-gray-700">{error.statusText || "Oops! The page you're looking for doesn't exist."}</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;