import React from "react";
import { Segment } from "semantic-ui-react";
import Host from './Host'

function ColdStorage({hosts, setHosts}) {

  const hostComps = hosts.map(host => <Host  key={host.id} host={host} hosts={hosts} setHosts={setHosts}/>)

  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        {hostComps}
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
