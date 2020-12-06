import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Triage.css';

// import rescueBreaths from '../../pictures/rescueBreaths.PNG';

function Choking() {
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
    localStorage.setItem("choking", true);
    history.push("/results");
  }
  function noClick() {
    localStorage.setItem("choking", false);
    history.push("/results");
  }

  return (
    <div className="triage">
      <div className="triage--choose">
        <h1>Is the victim <span style={{ color: "red" }}>choking</span>?</h1>
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
        <h2>How to check for choking:</h2>
        <div className="triage--how-to-cards">
          <Card className={classes.root} style={{ width: "40%" }}>
            {/* <CardMedia className={classes.media} image={rescueBreaths} /> */}
            <CardContent>
              <p>If the victim cannot speak, cry, cough or breathe, they are choking.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Choking;
