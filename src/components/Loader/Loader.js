import React from 'react';
import "./Loader.css"

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center loader">
      <img className="loader-image" width="111" height="128"
           src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"/>
    </div>
  );
};

export default Loader;