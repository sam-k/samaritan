import React from 'react';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Results.css';

import rescueBreaths from '../../pictures/rescueBreaths.PNG';

function RescueBreathingResults() {
  const useStyles = makeStyles((theme) => ({
    root: { maxWidth: 400 },
    media: { height: 240 }
  }));
  const classes = useStyles();

  return (
    <div className="results">
      <div className="results--result">
        <i class="fas fa-bullhorn" />
        <h2>Start giving rescue breaths.</h2>
      </div>

      <div className="results--divider" />

      <div className="results--how-to">
        <h2>How to give rescue breaths:</h2>
        <div className="results--how-to-cards">
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

export default RescueBreathingResults;
