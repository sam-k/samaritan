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
import rescuebreathing from '../pictures/rescue breaths.PNG'
import Alert from '@material-ui/lab/Alert';

function RescueBreathing() {
  const [open, setOpen] = useState(JSON.parse(localStorage.getItem("open")));

  let history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1000,
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
    localStorage.setItem("rescuebreathing", true)
    history.push("/step3")
  }
  function noClick(){
    localStorage.setItem("rescuebreathing", false)
    history.push("/results")
  }
  return (
    <div className="RescueBreathing">
    <Collapse in={!open}>
      <Alert severity="error" >Disclamer: If you suspect a medical emergency, call 911 immediately before or instead of proceeding with this page</Alert>
    </Collapse>
    <Container fixed>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <Typography variant="h4" >
        Conduct Rescue Breathing:
      </Typography>
      <br></br><br></br>
      <Typography variant="h6" >
        How to conduct rescue breathing
      </Typography>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={rescuebreathing}
            />
            <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" component="h2">
                  FOR CHILD OR ADULT
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                1. Tile head back and lift chin upward
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                2. Pinch nostrils shut
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                3. Cover mouth with yours
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                4. Gently breathe into person's mouth in 1s breaths and breathe every 5-6s
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                5. Continue for 2 breaths
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="h5" component="h2">
                  FOR INFANT
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                1. Form seal around mouth and nose with your mouth
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                2. Gently breathe into person's mouth in 1s breaths and breathe every 5-6s
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                3. Continue for 2 breaths
                </Typography>
              </Grid>
            </Grid>


            </CardContent>
          </Card>

      <br></br><br></br><br></br><br></br>
      <Typography variant="h4" >
        Did the patient's chest rise?
      </Typography>
      <br></br><br></br><br></br>
      <Button className={classes.button} variant="contained" color="default" value="false" onClick={noClick}>No</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button className={classes.button} variant="contained" color="secondary" value="true" onClick={yesClick}>Yes</Button>

      </Container>
    </div>

  );
}

export default RescueBreathing;
