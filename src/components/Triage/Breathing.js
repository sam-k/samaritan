import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import './Triage.css';

import breathing1 from '../../pictures/breathing1.PNG'
import breathing2 from '../../pictures/breathing2.PNG'

function Breathing() {
  let history = useHistory();
  const conscious = JSON.parse(localStorage.getItem("conscious"));

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
    localStorage.setItem("breathing", true);
    history.push("/results");
  }
  function noClick() {
    localStorage.setItem("breathing", false);
    history.push(conscious ? "/step5" : "/step4");
  }

  return (
    <div className="triage">
      {!conscious ?
        <div className="triage--instruction">
          <i class="fas fa-bullhorn" />
          <h2>Call 911 before proceeding.</h2>
        </div>
        : null}

      <div className="triage--choose">
        <h1>Is the victim <span style={{ color: "red" }}>breathing</span>?</h1>
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
        <h2>How to check for breathing:</h2>
        <div className="triage--how-to-cards">
          <Card className={classes.root} style={{ width: "40%" }}>
            <CardMedia className={classes.media} image={breathing1} />
            <CardContent>
              <h3>For child or adult:</h3>
              <p>1. Position the victim.</p>
              <ul>
                <li>If the victim is face-down, roll the victim onto their back while supporting the head and neck.</li>
                <li>Tilt the head back and lift the chin to open the airway.</li>
              </ul>
              <p>2. Check for breathing.</p>
              <ul>
                <li>Look for movement and look, listen and feel for normal breathing for 10 seconds.</li>
                <li><b>Irregular, gasping or shallow breathing is NOT normal breathing.</b></li>
              </ul>
            </CardContent>
          </Card>

          <Card className={classes.root} style={{ width: "40%" }}>
            <CardMedia className={classes.media} image={breathing2} />
            <CardContent>
              <h3>For an infant:</h3>
              <p>Position the victim:</p>
              <ul>
                <li>Tilt the head to a neutral position.</li>
              </ul>
              <p>Check for breathing:</p>
              <ul>
                <li>Look for movement and look, listen and feel for normal breathing for 10 seconds.</li>
                <li><b>Irregular, gasping or shallow breathing is not normal breathing.</b></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Breathing;
