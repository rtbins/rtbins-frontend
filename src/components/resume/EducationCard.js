import React from "react";
import PropTypes from "prop-types";

const EducationCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Kendriya Vidyalaya No. 1</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          High School
        </h6>
        <p className="card-text">
          Some quick example text to build on the card title and
          make up the bulk of the card's content.
        </p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link float-right">
          Another link
        </a>
      </div>
    </div>
  );
};

export default EducationCard;
