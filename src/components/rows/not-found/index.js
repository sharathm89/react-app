import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <div className="not-found-title">That page doesn&apos;t exist!</div>
    <div className="not-found-sub-title">
      Sorry, the page you were looking for could not be found.
    </div>

    <div className="not-found-statement">
      Or you can return to our <Link to="/">home page</Link> or{" "}
      <Link to="/contact-us">contact us</Link> if you can’t find what you are
      looking for.
    </div>
  </div>
);

export default NotFound;
