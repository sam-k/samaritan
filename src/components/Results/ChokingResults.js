import React from 'react';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Results.css';

import choking1 from '../../pictures/choking1.PNG';
import choking2 from '../../pictures/choking2.PNG';

function ChokingResults() {
  const useStyles = makeStyles((theme) => ({
    root: { maxWidth: 400 },
    media: { height: 240 }
  }));
  const classes = useStyles();

  return (
    <div className="results">
      <div className="results--result">
        <i class="fas fa-bullhorn" />
        <h2>Remove the lodged object.</h2>
      </div>

      <div className="results--divider" />

      <div className="results--how-to">
        <h2>How to clear the airway:</h2>
        <div className="triage--how-to-cards">
          <Card className={classes.root} style={{ width: "40%" }}>
            <CardMedia className={classes.media} image={choking1} />
            <CardContent>
              <h3>For child or adult:</h3>
              <p>Stand behind them and slightly to one side. Support their chest with 1 hand. Lean them forward.</p>
              <p>Give up to 5 sharp blows between their shoulder blades with the heel of your hand</p>
              <p>Check if the blockage has cleared.</p>
              <p>If the airway is still blocked, and if the victim is NOT pregnant, perform the Heimlich maneuver.</p>
              <ul>
                <li>Stand behind the patient who's choking.</li>
                <li>Place your arms around their waist and bend them forward.</li>
                <li>Clench 1 fist and place it right above their belly button</li>
                <li>Put the other hand on top of your fist and pull sharply inwards and upwards</li>
                <li>Repeat this movement up to 5 times</li>
              </ul>
            </CardContent>
          </Card>

          <Card className={classes.root} style={{ width: "40%" }}>
            <CardMedia className={classes.media} image={choking2} />
            <CardContent>
              <h3>For an infant:</h3>
              <p>Sit down and lay your baby face down along your thighs, supporting their head with your hand</p>
              <p>Give up to 5 sharp back blows with the heel of 1 hand in the middle of the back between the shoulder blades</p>
              <p>If the airway is still blocked, perform the Heimlich maneuver.</p>
              <ul>
                <li>Lay your baby face up along the length of your thighs</li>
                <li>Find the breastbone and place 2 fingers in the middle</li>
                <li>Give 5 sharp chest thrusts (pushes), compressing the chest by about a third</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ChokingResults;
