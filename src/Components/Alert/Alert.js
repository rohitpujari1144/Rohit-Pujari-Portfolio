import React from "react";

function Alert(props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{marginTop:'100px'}}>
    {props.alert}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
