import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'

function Headquarters({hosts, setHosts, areas}) {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}><ColdStorage hosts={hosts} setHosts={setHosts}/></Grid.Column>
      <Grid.Column width={5}>
        <Details />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
