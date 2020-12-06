
import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import rescuebreathing from '../pictures/rescue breaths.PNG'


function RescueBreathingResults(){
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
  return (
    <div className="RescueBreathingResults">
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
        </div>
  );
}

export default RescueBreathingResults;
