import React from "react";
import "./TripInfo.css";

const TripInfo = () => {
  return (
    <div id="destination">
      <div className="mt-5 covered">
        <div className="content text-center">
          <h1 className="title">Choose Tour</h1>
          <h5 className="text-center text-white mb-5">
            Find your next travel adventure and make it memorable. Explore
            wildlife, enjoy seaside or book a cruise tour. Check out our popular
            destinations.
          </h5>
        </div>
      </div>
      <div className="container-fluid text-center">
        <div className="numbers d-flex flex-md-row flex-wrap justify-content-center">
          <div className="rect">
            <h1>
              <i className="fa-icon fas fa-plane"></i>
            </h1>
            <h5>Self-Guided</h5>
          </div>
          <div className="rect">
            <h1>
              <i className="fa-icon fas fa-ship"></i>
            </h1>
            <h5>Cruises</h5>
          </div>
          <div className="rect">
            <h1><i className="fa-icon fas fa-hiking"></i></h1>
            <h5>
              Adventure
            </h5>
          </div>
          <div className="rect">
            <h1><i className="fa-icon fas fa-tree"></i></h1>
            <h5>
              WildLife
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;
