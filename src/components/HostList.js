import React from "react";
import { Card } from "semantic-ui-react";
import Host from './Host'

function HostList({hosts, setHosts}) {

  const hostComps = hosts.map(host => <Host  key={host.id} host={host} hosts={hosts} setHosts={setHosts}/>)
  console.log(hosts)
  return (
    <Card.Group itemsPerRow={6}>{hostComps}</Card.Group>
  );
}

export default HostList;
