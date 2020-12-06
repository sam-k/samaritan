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
import rescuebreathing from '../pictures/rescue breaths.PNG'
import Alert from '@material-ui/lab/Alert';
import panic from '../pictures/panicattack.PNG'

function MentalHealth() {
  const open = JSON.parse(localStorage.getItem("open"));

  let history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1000,
      minHeight: 300,
    },
    media: {
      height: 300,
      // paddingTop: '56.25%', // 16:9
    },
    button: {
      height: 100,
      width:200,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }));
  const classes = useStyles();

  function yesClick(){
    localStorage.setItem("mental", true)
    history.push("/mentalresults")
  }
  function noClick(){
    localStorage.setItem("mental", false)
    history.push("/mentalresults")
  }
  return (
    <div className="MentalHealth">
    <Collapse in={!open}>
      <Alert severity="error" >Disclamer: If you suspect a medical emergency, call 911 immediately before or instead of proceeding with this page</Alert>
    </Collapse>
    <Container fixed>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <Typography variant="h4" >
        Does the person have any of the following symptoms?
      </Typography>
      <br></br><br></br>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>

            <CardContent>
            <Typography variant="h5" component="h2">
            Thoughts of harming self or others <br></br>
            Attempts at harming self or others<br></br>
            Mental health symptoms that impact ability to function or care for basic needs<br></br>
            </Typography>

            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={panic}
            />
          </Card>
          </Grid>
        </Grid>
      <br></br><br></br><br></br><br></br>
      <Button className={classes.button} variant="contained" color="default" value="false" onClick={noClick}>No</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button className={classes.button} variant="contained" color="secondary" value="true" onClick={yesClick}>Yes</Button>

      </Container>
    </div>

  );
}

export default MentalHealth;
