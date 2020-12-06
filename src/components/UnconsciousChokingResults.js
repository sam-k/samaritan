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
import cpr1 from '../pictures/cpr1.PNG'
import cpr2 from '../pictures/cpr2.PNG'
import Alert from '@material-ui/lab/Alert';

function UnconsciousChokingResults() {
  const [open, setOpen] = useState(JSON.parse(localStorage.getItem("open")));
  const conscious = JSON.parse(localStorage.getItem("conscious"))
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
  return (
    <div className="UnconsciousChokingResults">
    <Typography variant="h4" >
      The patient is most likey choking
    </Typography>
    <Typography variant="h4" >
      Conduct CPR:
    </Typography>
    <br></br><br></br>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={cpr1}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              FOR CHILD OR ADULT
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
            1. Lay the patient on the back and open their airways<br></br>
            2. Do 30 chest compression<br></br>
            3. Do 2 rescue breaths<br></br>
            4. If you see the object and it is loose, remove it<br></br>
            5. If you do not see an object, give two more rescue breaths<br></br>
            6. If the patient's chest still does not rise, keep going with cycles of chest compressions, checking for an object, and rescue breaths until medical help arrives or the patient starts breathing on their own<br></br>
            7. If object is removed keep the patient still and seek medical help<br></br>
            </Typography>

          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={cpr2}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              FOR INFANT
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
            1. Lay the patient on the back and open their airways<br></br>
            2. Do 30 chest compression<br></br>
            3. Do 2 rescue breaths<br></br>
            4. If you see the object and it is loose, remove it<br></br>
            5. If you do not see an object, give two more rescue breaths<br></br>
            6. If the patient's chest still does not rise, keep going with cycles of chest compressions, checking for an object, and rescue breaths until medical help arrives or the patient starts breathing on their own<br></br>
            7. If object is removed keep the patient still and seek medical help<br></br>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </div>

  );
}

export default UnconsciousChokingResults;
