import React from "react";
import PropTypes from "prop-types";

const Header = ({ personName, personBrief }) => {
  return (
    <div className="section-content-title row justify-content-center">
      <div className="col-lg-12 col-sm-12 col-md-12">
        <span className="py-2">
          <span className="section-main-title">Resume</h3>
        </span>
        <span className="pull-right">
        {personName}
        </span>
      </div>
    </div>
  );
};

export default Header;
