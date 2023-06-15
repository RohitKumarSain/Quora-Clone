import { Link } from "react-router-dom";
import "../componentcss/error.css";
const Error = () => {
  return (
    <>
      <h1 className="error-header">404 Page Not Found </h1>
      <button className="btn btn-danger">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Go to Home
        </Link>
      </button>
    </>
  );
};

export default Error;
