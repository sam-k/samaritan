import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import './Triage.css';

import conscious1 from '../../pictures/conscious1.PNG';
import conscious2 from '../../pictures/conscious2.PNG';

function Conscious() {
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
    localStorage.setItem("conscious", true);
    history.push("/step2");
  }
  function noClick() {
    localStorage.setItem("conscious", false);
    history.push("/step2");
  }

  return (
    <div className="triage">
      <div className="triage--choose">
        <h1>Is the victim <span style={{ color: "red" }}>conscious</span>?</h1>
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
        <h2>How to check for consciousness:</h2>
        <div className="triage--how-to-cards">
          <Card className={classes.root} style={{ width: "40%" }}>
            <CardMedia className={classes.media} image={conscious1} />
            <CardContent>
              <h3>For child or adult:</h3>
              <p>Tap their sholder and shout "Are you okay?"</p>
            </CardContent>
          </Card>

          <Card className={classes.root} style={{ width: "40%" }}>
            <CardMedia className={classes.media} image={conscious2} />
            <CardContent>
              <h3>For an infant:</h3>
              <p>Tap their shoulder or flick their foot.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Conscious;
