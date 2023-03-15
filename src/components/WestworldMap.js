import React from "react";
import { Segment } from "semantic-ui-react";
import Area from './Area'

function WestworldMap({hosts, areas}) {
  const areaComps = areas.map(area => <Area key={area.id} area={area}/>)
  return <Segment id="map">{areaComps}</Segment>;
}

export default WestworldMap;
