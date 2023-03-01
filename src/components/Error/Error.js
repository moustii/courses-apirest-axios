import React from "react";

const Error = (props) => (
    <div className="alert alert-danger">
        {props.children}
    </div>
);

export default Error;