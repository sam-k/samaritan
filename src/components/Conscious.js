import './Conscious.css';
import clsx from 'clsx';
import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import conscious1 from '../pictures/conscious1.PNG'
import conscious2 from '../pictures/conscious2.PNG'
import Alert from '@material-ui/lab/Alert';

function Conscious() {
  const [open, setOpen] = useState(JSON.parse(localStorage.getItem("open")));

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
    localStorage.setItem("conscious", true)
    history.push("/")
  }
  function noClick(){
    localStorage.setItem("conscious", false)
    history.push("/")
  }
  return (
    <div className="Conscious">
    <Collapse in={!open}>
      <Alert severity="error" >Disclamer: If you suspect a medical emergency, call 911 immediately before or instead of proceeding with this page</Alert>
    </Collapse>
    <Container fixed>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <Typography variant="h4" >
        Is the patient conscious?
      </Typography>
      <br></br><br></br>
      <Typography variant="h6" >
        How to check for consciousness
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={conscious1}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                FOR CHILD OR ADULT
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
                Tap their sholder and shout "Are you okay?"
              </Typography>
            </CardContent>
          </Card>
        </Grid>



        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={conscious2}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                FOR INFANT
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
                Tap their shoulder or flick their foot
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br></br><br></br><br></br><br></br>
      <Button className={classes.button} variant="contained" color="default" value="false" onClick={noClick}>No</Button><Button className={classes.button} variant="contained" color="secondary" value="true" onClick={yesClick}>Yes</Button>

      </Container>
    </div>

  );
}

export default Conscious;
