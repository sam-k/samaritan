import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Triage.css';

import panic from '../../pictures/panicattack.PNG';

function MentalHealth() {
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
    localStorage.setItem("mental", true);
    history.push("/mentalresults");
  }
  function noClick() {
    localStorage.setItem("mental", false);
    history.push("/mentalresults");
  }
  return (
    <div className="triage">
      <div className="triage--choose">
        <h1>Does the person have any of the <span style={{ color: "red" }}>following symptoms</span>?</h1>
      </div>

      {/* Let's just use this here bc the CSS already exists */}
      <div className="triage--how-to">
        <div className="triage--how-to-cards">
          <Card className={classes.root} style={{ width: "40%" }}>
            <CardMedia className={classes.media} image={panic} />
            <CardContent>
              <p>Thoughts of harming self or others?</p>
              <p>Attempts at harming self or others?</p>
              <p>Mental-health symptoms that impact the ability to function or care for basic needs?</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="triage--choose">
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
    </div>
  );
}

export default MentalHealth;
