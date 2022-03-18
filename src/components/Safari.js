import React from "react";
import Close from "../images/safari/Close.png";
import Nav from "../images/safari/nav.png";
import Minimize from "../images/safari/Minimize.png";
import Zoom from "../images/safari/Zoom.png";
import Refresh from "../images/safari/refresh.png";
import NewTab from "../images/safari/new-tab.png";
import TabOverview from "../images/safari/tab-overview.png";
import Share from "../images/safari/share.png";
import VacationHome from "../images/safari/vacation-home.jpg";
import AirBnb from "../images/airbnb-logo.png";

export default function Safari(props) {
  return (
    <div className="safari-container">
      <div className="safari--header">
        <div className="safari--buttons">
          <img src={Close} />
          <img src={Minimize} />
          <img src={Zoom} />
        </div>
        <img className="safari--nav" src={Nav} />
        <div className="safari--domain">
          {props.url}
          <img src={Refresh} className="safari--refresh" />
        </div>
        <div className="safari--corner">
          <img src={Share} />
          <img src={NewTab} />
          <img src={TabOverview} />
        </div>
      </div>

      <div className="safari--body">
        <img className="safari--airlogo" src={AirBnb} />
        <div className="safari--hero">
          <div className="safari-content">
            <h1>Book a home near your experience</h1>
            <button className="buttons">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
