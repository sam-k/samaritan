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

function ChokingResults() {
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
    <div className="ChokingResults">
    <Container fixed>
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
              1. Stand behind them and slightly to one side. Support their chest with 1 hand. Lean them forward
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              2. Give up to 5 sharp blows between their shoulder blades with the heel of your hand
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              3. Check if the blockage has cleared
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              If not...
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              DO NOT USE THE METHOD BELOW ON PREGNANT WOMEN

              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              1. Stand behind the patient who's choking
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              2. Place your arms around their waist and bend them forward
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              3. Clench 1 fist and place it right above their belly button
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              4. Put the other hand on top of your fist and pull sharply inwards and upwards
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              5. Repeat this movement up to 5 times
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
              1. Sit down and lay your baby face down along your thighs, supporting their head with your hand
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              2. Give up to 5 sharp back blows with the heel of 1 hand in the middle of the back between the shoulder blades
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              If still not clear...
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              1. Lay your baby face up along the length of your thighs
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              2. Find the breastbone and place 2 fingers in the middle
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              3. Give 5 sharp chest thrusts (pushes), compressing the chest by about a third
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Container>
    </div>

  );
}

export default ChokingResults;
