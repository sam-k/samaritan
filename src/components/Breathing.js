import './Conscious.css';
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
import breathing from '../pictures/breathing.PNG'
import breathing2 from '../pictures/breathing2.PNG'
import Alert from '@material-ui/lab/Alert';

function Breathing() {
  const [open, setOpen] = useState(JSON.parse(localStorage.getItem("open")));
  const conscious = JSON.parse(localStorage.getItem("conscious"))
  let history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 500,
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
    localStorage.setItem("breathing", true)
    history.push("/results")
  }
  function noClick(){
    localStorage.setItem("breathing", false)
    if (conscious) {
      history.push("/step5")
    } else {
      history.push("/step4")
    }
  }
  return (
    <div className="Breathing">
    <Collapse in={!open}>
      <Alert severity="error" >Disclamer: If you suspect a medical emergency, call 911 immediately before or instead of proceeding with this page</Alert>
    </Collapse>
    <Container fixed>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      {!conscious ? <Typography variant="h3" > Call 911 </Typography>: null}
      <Typography variant="h4" >
        Is the patient breathing?
      </Typography>
      <br></br><br></br>
      <Typography variant="h6" >
        How to check for breathing
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={breathing}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                FOR CHILD OR ADULT
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              1. Position the patient:
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              - If the victim is face-down, roll the victim onto his or
              her back, while supporting the head and neck
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              - Tilt back head and lift chin to open airway
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              2. Check for breathing
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              - Look for movement and look, listen and feel for normal breathing for 10s
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              - Irregular, gasping or shallow breathing is not normal breathing
              </Typography>
            </CardContent>
          </Card>
        </Grid>



        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={breathing2}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                FOR INFANT
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              1. Position the patient:
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              - Tilt head to neutral position
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              2. Check for breathing
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              - Look for movement and look, listen and feel for normal breathing for 10s
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              - Irregular, gasping or shallow breathing is not normal breathing
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br></br><br></br><br></br><br></br>
      <Button className={classes.button} variant="contained" color="default" value="false" onClick={noClick}>No</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button className={classes.button} variant="contained" color="secondary" value="true" onClick={yesClick}>Yes</Button>

      </Container>
    </div>

  );
}

export default Breathing;
