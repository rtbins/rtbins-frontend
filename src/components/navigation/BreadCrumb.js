import React from 'react';
// import { Link } from 'react-router-dom';

const BreadCrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">{/* <a href="#">Home</a> */}</li>
          <li className="breadcrumb-item">{/* <a href="#">Blog</a> */}</li>
          <li className="breadcrumb-item active" aria-current="page">
            Reinforcement learning
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default BreadCrumb;
