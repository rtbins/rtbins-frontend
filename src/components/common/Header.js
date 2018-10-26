import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div className="main-header-content 
                    row justify-content-center my-1">
      <div className="col-lg-12 
                      col-sm-12 
                      col-md-12">
        <h3 className="main-header-title">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Header;
