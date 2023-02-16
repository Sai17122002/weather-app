import React from "react";
import ErrorImage from "./img/error.jpg";

function Error() {
  return (
    <div className="error-wrapper">
      <div className="error-image">
        <img src={ErrorImage} alt="Error Image" />
      </div>
      <div className="error">
        Unfortunately, something has gone wrong. We're unable to fulfill your
        request. Rest assured we have been notified and are looking into the
        issue. Please refresh your browser
      </div>
    </div>
  );
}

export default Error;
