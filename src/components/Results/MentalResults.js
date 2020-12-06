import React from 'react';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Results.css';

import deescalation from '../../pictures/deescalation.PNG';

function MentalResults() {
  const mental = JSON.parse(localStorage.getItem("mental"));

  const useStyles = makeStyles((theme) => ({
    root: { maxWidth: 400 },
    media: { height: 240 }
  }));
  const classes = useStyles();

  return (
    <div className="results">
      <div className="results--result">
        <i class="fas fa-bullhorn" />
        <h2>Try to deescalate the situation.</h2>
      </div>

      <div className="results--divider" />

      <div className="results--how-to">
        <h2>How to deescalate:</h2>
        <div className="triage--how-to-cards">
          <Card className={classes.root} style={{ width: "40%" }}>
            <CardMedia className={classes.media} image={deescalation} />
            <CardContent>
              <p>Listen and express support in a calm and careful manner</p>
              <p>Move slowly, and be non-judgemental</p>
              <p>Give the person space</p>
              {mental ?
                <p>If de-escalation does not work or the person gets more agitated call 911</p> :
                <p>Suggest seeking professional care to the person</p>
              }
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MentalResults;
