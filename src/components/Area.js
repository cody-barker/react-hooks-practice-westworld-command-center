import React from "react";
import "../stylesheets/Area.css";
import HostList from './HostList'

function Area({area}) {

  // const name = function() {
  //   if (area.name === "high_plains") {
  //     return "High Plains"
  //   }
  // }

  const areaTitle = function() {
    switch(area.name) {
      case "high_plains":
        return "High Plains"
      case "lowlands":
        return "Lowlands"
      case "under_construction":
        return "Under Construction"
      case "pariah":
        return "Pariah"
      case "python_pass":
        return "Python Pass"
      case "badlands":
        return "Badlands"
    }
  }

  return (
    <div
      className="area"
      id={
        area.name
      }
    >
      <h3 className="labels">
        {areaTitle(area)}
      </h3>
      {/**Look at Checkpoint 1 Item 2 for this */}
      {/**<HostList />*/}
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
