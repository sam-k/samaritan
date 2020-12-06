import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Triage.css';

import pulse1 from '../../pictures/pulse1.PNG';
import pulse2 from '../../pictures/pulse2.PNG';

function Pulse() {
  let history = useHistory();

  const useStyles = makeStyles((theme) => ({
    root: { maxWidth: 400 },
    media: { height: 240 },
    button: {
      padding: "2.5rem 5rem",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.5em",
      fontWeight: 700
    }
  }));
  const classes = useStyles();

  function yesClick() {
    localStorage.setItem("pulse", true);
    history.push("/results");
  }
  function noClick() {
    localStorage.setItem("pulse", false);
    history.push("/results");
  }

  return (
    <div className="triage">
      <div className="triage--choose">
        <h1>Does the victim have a <span style={{ color: "red" }}>pulse</span>?</h1>
        <ul className="triage--options">
          <li>
            <Button
              className={classes.button}
              variant="contained"
              value="true"
              onClick={yesClick}
              style={{ backgroundColor: "#00000020" }}
            >Yes</Button>
          </li>
          <li>
            <Button
              className={classes.button}
              variant="contained"
              value="false"
              onClick={noClick}
              style={{ backgroundColor: "#ff000066" }}
            >No</Button>
          </li>
        </ul>
      </div>

      <div className="triage--divider" />

      <div className="triage--how-to">
        <h2>How to check for a pulse:</h2>
        <div className="triage--how-to-cards">
          <Card className={classes.root} style={{ width: "40%" }}>
            <CardMedia className={classes.media} image={pulse1} />
            <CardContent>
              <h3>For child or adult:</h3>
              <p>Place one hand on the victim’s forehead.</p>
              <p>Place 2 fingers on the front of the victim’s neck.</p>
              <p>Slide the fingers down into the groove at the side of the victim’s neck to find the pulse.</p>
            </CardContent>
          </Card>

          <Card className={classes.root} style={{ width: "40%" }}>
            <CardMedia className={classes.media} image={pulse2} />
            <CardContent>
              <h3>For an infant:</h3>
              <p>Place one hand on the victim’s forehead.</p>
              <p>Use the other hand to find the pulse on the inside of the victim’s upper arm, between the elbow and shoulder.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Pulse;
