import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import './Triage.css';

import rescueBreaths from '../../pictures/rescueBreaths.PNG'

function RescueBreathing() {
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
    localStorage.setItem("chestRose", true)
    history.push("/step3")
  }
  function noClick() {
    localStorage.setItem("chestRose", false)
    history.push("/results")
  }
  return (
    <div className="triage">
      <div className="triage--instruction">
        <i class="fas fa-bullhorn" />
        <h2>Give 2 rescue breaths. <span style={{ fontWeight: 400 }}>See below for instructions.</span></h2>
      </div>

      <div className="triage--choose">
        <h1>Did the victim’s <span style={{ color: "red" }}>chest rise</span>?</h1>
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
        <h2>How to give rescue breaths:</h2>
        <div className="triage--how-to-cards">
          <Card className={classes.root} style={{ width: "40%" }}>
            <CardMedia className={classes.media} image={rescueBreaths} />
            <CardContent>
              <h3>For child or adult:</h3>
              <p>Tilt the head back and lift the chin upward.</p>
              <p>Pinch the nostrils shut.</p>
              <p>Cover the victim’s mouth with yours.</p>
              <p>Gently breathe into victim’s mouth in 1-second breaths, and watch to check if the chest rises.</p>
              <p>Continue for 2 rescue breaths.</p>
            </CardContent>
          </Card>

          <Card className={classes.root} style={{ width: "40%" }}>
            <CardMedia className={classes.media} image={rescueBreaths} />
            <CardContent>
              <h3>For an infant:</h3>
              <p>Form a seal around the victim’s mouth and nose with your mouth.</p>
              <p>Gently breathe into victim’s mouth in 1-second breaths, and watch to check if the chest rises.</p>
              <p>Continue for 2 rescue breaths.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default RescueBreathing;
