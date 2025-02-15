import React from "react";

export default function Counter(props) {
  return (
    <div className="d-flex justify-content-center bg-dark text-light p-3">
      <div className="me-3">
        <i className="fa-regular fa-clock"></i>
      </div>
      <div className="fs-1">{props.seconds.toString().padStart(6, "0")}</div> 
    </div>
  );
}
// linea 9 props,seconds muestra numero de 6 digitos los cuales son inicialmente 0