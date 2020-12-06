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
import cpr1 from '../../pictures/cpr1.PNG'
import cpr2 from '../../pictures/cpr2.PNG'

function CPRResults() {
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
    <div className="CPRResults">
      <Typography variant="h4" >
        Conduct CPR
      </Typography>
      <br></br><br></br>
      <Typography variant="h6" >
        How to conduct CPR:
      </Typography>
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
              1. Lay the patient on the back and open their airways
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              2. Do 30 chest compression
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              3. Do 2 rescue breaths
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              4. Repeat until an ambulance arrive
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
              1. Lay the patient on the back and open their airways
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              2. Do 30 chest compression
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              3. Do 2 rescue breaths
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              4. Repeat until an ambulance arrive
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>

  );
}

export default CPRResults;
