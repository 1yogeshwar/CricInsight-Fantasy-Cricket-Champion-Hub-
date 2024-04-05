import React from "react";
import { NavLink } from "react-router-dom";
import csk from "../../src/images/csk.svg";
import rcb from "../../src/images/rcb.svg";
import mi from "../../src/images/mi.svg";
import kkr from "../../src/images/kkr.svg";
import srh from "../../src/images/srh.svg";
import gt from "../../src/images/gt.svg";
import pbks from "../../src/images/pbks.svg";
import rr from "../../src/images/rr.svg";
import dc from "../../src/images/dc.svg";
import lsg from "../../src/images/lsg.svg";
import "../components/Navbar.css"

const Card = (props) => {
  const { imgsrc, title } = props;

  const getGoToRoute = () => {
    switch (imgsrc) {
      case csk:
        return "/chennai";
      case rcb:
        return "/bangalore";
      case mi:
        return "/mumbai";
      case kkr:
        return "/kolkata";
      case srh:
        return "/hyderabad";
      case gt:
        return "/ahmedabad";
      case pbks:
        return "/punjab";
      case rr:
        return "/rajasthan";
      case dc:
        return "/delhi";
      case lsg:
        return "/lucknow";
      default:
        return "/";
    }
  };

  const getSecondaryButtonRoute = () => {
    switch (imgsrc) {
      case csk:
        return "/csk";
      case rcb:
        return "/rcb";
      case mi:
        return "/mi";
      case kkr:
        return "/kkr";
      case srh:
        return "/srh";
      case gt:
        return "/gt";
      case pbks:
        return "/pbks";
      case rr:
        return "/rr";
      case dc:
        return "/dc";
      case lsg:
        return "/lsg";
      default:
        return "/";
    }
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
  <div className="card h-100">
    <img
      src={imgsrc}
      className="card-img-top"
      alt="Team Logo"
      style={{ objectFit: "contain", height: "200px" }}
    />
    <div className="card-body d-flex flex-column">
      {/* <h5 className="card-title font-weight-bold mb-0">{props.title}</h5> */}
      <p className="card-text flex-grow-1" style={{textAlign:"center"}}>
        {props.title}
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <NavLink   to={getSecondaryButtonRoute()} className="btn btn first">
          Players
        </NavLink>
        <NavLink
          to={getGoToRoute()}
          className="btn second ground"
          style={{ marginLeft: "50px !important" }} 
          // Add margin to the right of the first button
        >
        
          Ground
        </NavLink>
      </div>
    </div>
  </div>
</div>

  );
};

export default Card;
