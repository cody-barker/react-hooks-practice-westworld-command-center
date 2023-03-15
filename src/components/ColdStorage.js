import React from "react";
import { Segment } from "semantic-ui-react";
import Host from './Host'
import HostList from './HostList'

function ColdStorage({hosts, setHosts}) {

  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">Cold Storage</h3>
      </Segment>
      <Segment compact>
        <HostList hosts={hosts} setHosts={setHosts}/>
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
