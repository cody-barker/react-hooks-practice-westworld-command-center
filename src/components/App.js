import React, {useEffect, useState} from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestWorldMap from './WestworldMap'
import Headquarters from './Headquarters'

function App() {

  const [hosts, setHosts] = useState([])
  const [areas, setAreas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/hosts')
    .then(r => r.json())
    .then(hosts => setHosts(hosts))
  },[])

  useEffect(() => {
    fetch('http://localhost:3001/areas')
    .then(r => r.json())
    .then(areas => setAreas(areas))
  }, [])

  return (
    <Segment id="app">
      <WestWorldMap hosts={hosts} areas={areas}/>
      <Headquarters hosts={hosts} areas={areas}/>
    </Segment>
  );
}

export default App;

/**App
 *  WestWorldMap
 *    Area
 *      Host
 *  Headquarters
 *    ColdStorage
 *      HostList
 *        Host
 *    Details
 *      Host Info
 *    Log Panel
 *    
*/
      