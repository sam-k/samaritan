import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import deescalation from '../pictures/deescalation.PNG'
import Alert from '@material-ui/lab/Alert';

function MentalResults() {
  const open = JSON.parse(localStorage.getItem("open"));
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1000,
      minHeight: 300,
    },
    media: {
      height: 300,
    },
  }));
  const classes = useStyles();

  const mental = JSON.parse(localStorage.getItem("mental"))
  return (
    <div className="MentalResults">
    <Collapse in={!open}>
      <Alert severity="error" >Disclamer: If you suspect a medical emergency, call 911 immediately before or instead of proceeding with this page</Alert>
    </Collapse>
    <Container fixed>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <Typography variant="h4" >
        Try to de-escalate
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>

            <CardContent>
            <Typography variant="h5" component="h2">
            1. Listen and express support in a calm and careful manner<br></br>
            2. Move slowly, and be non-judgemental<br></br>
            3. Give the person space<br></br>
            {mental ? 'If de-escalation does not work or the person gets more agitated call 911': null}
            {!mental ? '4. Suggest seeking professional care to the person': null}
            </Typography>

            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={deescalation}
            />
          </Card>
          </Grid>
        </Grid>
      </Container>
    </div>

  );
}

export default MentalResults;
