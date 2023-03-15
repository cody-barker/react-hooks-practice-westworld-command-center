import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";
import HostList from "./HostList";

function Host({host, hosts, setHosts}) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */

  function handleClass(e) {
    console.log(host.active)
    host.active ? host.active = false : host.active = true
    fetch(`http://localhost:3001/hosts/${host.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({active: !host.active})
    })
    .then(r => r.json())
    .then(host => setHosts([...hosts]))
  }

  return (
    <Card
      className={host.active ? "host selected" : "host"}
      onClick={() => handleClass(host)}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
