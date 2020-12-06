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

function Choking() {
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
    localStorage.setItem("choking", true)
    history.push("/results")
  }
  function noClick(){
    localStorage.setItem("choking", false)
    history.push("/results")
  }
  return (
    <div className="Choking">
    <Collapse in={!open}>
      <Alert severity="error" >Disclamer: If you suspect a medical emergency, call 911 immediately before or instead of proceeding with this page</Alert>
    </Collapse>
    <Container fixed>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <Typography variant="h4" >
        Is the patient choking?
      </Typography>
      <br></br><br></br>
      <Typography variant="h6" >
        How to know if someone is choking
      </Typography>
          <Card className={classes.root}>

            <CardContent>
            <Typography variant="h5" component="h2">
              If the patient cannot:
            </Typography>
            <Typography variant="h5" component="p">
            speak
            </Typography>
            <Typography variant="h5" component="p">
            cry
            </Typography>
            <Typography variant="h5" component="p">
            cough
            </Typography>
            <Typography variant="h5" component="p">
            or breathe,
            </Typography>
            <Typography variant="h5" component="p">
            They are choking
            </Typography>

            </CardContent>
          </Card>

      <br></br><br></br><br></br><br></br>
      <Button className={classes.button} variant="contained" color="default" value="false" onClick={noClick}>No</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button className={classes.button} variant="contained" color="secondary" value="true" onClick={yesClick}>Yes</Button>

      </Container>
    </div>

  );
}

export default Choking;
