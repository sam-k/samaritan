import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import rescuebreathing from '../../pictures/rescueBreaths.PNG'
import RescueBreathingResults from './RescueBreathingResults';
import CPRResults from './CPRResults';
import ChokingResults from './ChokingResults';
import MonitorResults from './MonitorResults';
import Call911 from './Call911';
import OtherResults from './OtherResults';

function Results() {
  const open = JSON.parse(localStorage.getItem("open"));
  const conscious = JSON.parse(localStorage.getItem("conscious"))
  const breathing = JSON.parse(localStorage.getItem("breathing"))
  const rescuebreathing = JSON.parse(localStorage.getItem("rescuebreathing"))
  const pulse = JSON.parse(localStorage.getItem("pulse"))
  const choking = JSON.parse(localStorage.getItem("choking"))
  const rescuebreathingLeaf = !conscious && !breathing && rescuebreathing && pulse
  const cprLeaf = !conscious && !breathing && rescuebreathing && !pulse
  const chokingLeaf = (!conscious && !breathing && !rescuebreathing) || (conscious && !breathing && choking)
  const monitor = !conscious && breathing
  const call911 = conscious && !breathing && !choking
  const other = conscious && breathing
  return (
    <div className="Results">
      <Collapse in={!open}>
        <div severity="error" >Disclamer: If you suspect a medical emergency, call 911 immediately before or instead of proceeding with this page</div>
      </Collapse>
      <Container fixed>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        {rescuebreathingLeaf ? <RescueBreathingResults /> : null}
        {cprLeaf ? <CPRResults /> : null}
        {chokingLeaf ? <ChokingResults /> : null}
        {monitor ? <MonitorResults /> : null}
        {call911 ? <Call911 /> : null}
        {other ? <OtherResults /> : null}
      </Container>
    </div>

  );
}

export default Results;
