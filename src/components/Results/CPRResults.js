import React from 'react';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Results.css';

import cpr1 from '../../pictures/cpr1.PNG';
import cpr2 from '../../pictures/cpr2.PNG';

function CPRResults() {
  const useStyles = makeStyles((theme) => ({
    root: { maxWidth: 400 },
    media: { height: 240 }
  }));
  const classes = useStyles();
  return (
    <div className="results">
      <div className="results--result">
        <i class="fas fa-bullhorn" />
        <h2>Start CPR.</h2>
      </div>

      <div className="results--how-to">
        <h2>How to perform CPR:</h2>
        <div className="triage--how-to-cards">
          <Card className={classes.root} style={{ width: "40%" }}>
            <CardMedia className={classes.media} image={cpr1} />
            <CardContent>
              <h3>For child or adult:</h3>
              <p>Lay the patient on the back and open their airways</p>
              <p>Do 30 chest compression</p>
              <p>Do 2 rescue breaths</p>
              <p>Repeat until an ambulance arrive</p>
            </CardContent>
          </Card>

          <Card className={classes.root} style={{ width: "40%" }}>
            <CardMedia className={classes.media} image={cpr2} />
            <CardContent>
              <h3>For an infant:</h3>
              <p>Lay the patient on the back and open their airways</p>
              <p>Do 30 chest compression</p>
              <p>Do 2 rescue breaths</p>
              <p>Repeat until an ambulance arrive</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CPRResults;
