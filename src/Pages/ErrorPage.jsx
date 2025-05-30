import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { Zoom } from "react-awesome-reveal";
import errorAnimation from '../../public/assets/Animation.json';
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <>
     <Helmet>
            <title>GearNest|ErrorPage</title>
           </Helmet>
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-center px-4">
      <Zoom>
        <div className="max-w-md w-full">
          <Lottie animationData={errorAnimation} loop={true} />
          <h2 className="text-4xl font-bold text-error mt-4">404 - Page Not Found</h2>
          <p className="text-gray-600 my-4">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <button className="btn btn-primary mt-2">Go Back Home</button>
          </Link>
        </div>
      </Zoom>
    </div>
    </>
  );
};

export default ErrorPage;
