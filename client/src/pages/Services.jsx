import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import "../components/Navbar.css";

const Services = () => {
  return (
    <div className="services-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mt-5">Our Services</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gt-y align-left-card">
              {Sdata.map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
