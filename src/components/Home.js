import './Home.css';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import health from '../pictures/healthemergency.PNG';
import mental from '../pictures/mentalemergency.PNG';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChokingResults from './ChokingResults'
import CPRResults from './CPRResults'

function Home() {
  if (localStorage.getItem("open") != "false") {
    localStorage.setItem("open", true);
  }
  const [open, setOpen] = useState(JSON.parse(localStorage.getItem("open")));

  const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
    root: {
      maxWidth: 400,
      marginLeft:100
    },
    media: {
      height: 400,
    },
    accordianroot: {
      width: '100%',
    },
    heading: {
      // fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("open", false);
  };
  return (
    <div className="Home">
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"DISCLAMER"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Something here about medical disclamer
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="alert" autoFocus>
          I understand
        </Button>
      </DialogActions>
    </Dialog>
    <Collapse in={!open}>
      <Alert severity="error" >Disclamer: If you suspect a medical emergency, call 911 immediately before or instead of proceeding with this page</Alert>
    </Collapse>
    <Container fixed>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <Typography variant="h1" className={classes.title}>
        Samaritan
      </Typography>
      <br></br>
      <Typography variant="body2" className='blurb'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
      </Typography>
      <br></br><br></br><br></br><br></br>
      <Typography variant="h4" className={classes.title}>
        Response Guide
      </Typography>
      <Divider />
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea href="/step1">
              <CardMedia
                className={classes.media}
                image={health}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Medical Emergency
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Triage an urgent, unknown situation and give immediate first aid.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>



        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea href="/mental">
              <CardMedia
                className={classes.media}
                image={mental}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Mental Health Emergency
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Help a person in immediate crisis, or deescalate the situation.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <br></br><br></br><br></br><br></br>
      <Typography variant="h4" className={classes.title}>
        Quick Access Guide
      </Typography>
      <Divider />
      <br></br>
      <div className={classes.accordianroot}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} variant="h5">Anaphylactic Shock</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <table>
            <tr>
            <Typography variant="h6">
              1. Immediately call 911 or your local medical emergency number<br></br>
              2. Ask the person if he or she is carrying an epinephrine autoinjector (EpiPen, Auvi-Q, others) to treat an allergic attack<br></br>
              3. If the person says he or she needs to use an autoinjector, ask whether you should help inject the medication. This is usually done by pressing the autoinjector against the person's thigh<br></br>
              4. Have the person lie still on his or her back<br></br>
              5. Loosen tight clothing and cover the person with a blanket. Don't give the person anything to drink<br></br>
              6. If there's vomiting or bleeding from the mouth, turn the person on his or her side to prevent choking<br></br>
              7. If there are no signs of breathing, coughing or movement, begin CPR. Do uninterrupted chest presses — about 100 every minute — until paramedics arrive<br></br>
            </Typography>
            </tr>
            <tr>
              <CPRResults/>
            </tr>
          </table>


        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} variant="h5">Choking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ChokingResults/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading} variant="h5">Drowning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <table>
            <tr>
            <Typography variant="h6">
              1. Take the person out of the water<br></br>
              2. Check for breathing (look to see if the person's chest is moving or if air is coming out of their nose/mouth)<br></br>
              3. If the person is not breathing, check pulse for 10 seconds<br></br>
              4. If there is no pulse, start CPR<br></br>
            </Typography>
            </tr>
            <tr>
              <CPRResults/>
            </tr>
          </table>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading} variant="h5">Diabetic Shock</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          <b>If the person is passed out:</b><br></br>
          1. Call 911 immediately and do not try to give them food or drink.<br></br>
          2. You, or someone who knows how, should give them a glucagon shot -- not insulin! -- to raise their blood sugar to a safer level.<br></br>
          <b>If the person is awake:</b><br></br>
          1. Give them something sweet to eat or a non-diet drink.<br></br>
          2. Help them get what they need to follow the 15/15 rule: Eat 15 grams of fast-acting carbs (3-4 glucose tablets or gels, 4 ounces of fruit juice or regular soda, or a tablespoon of honey or sugar) and wait 15 minutes. If they don't feel better, they should have more carbs and test their blood sugar again.<br></br>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading} variant="h5">Stroke</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <table>
            <tr>
            <Typography variant="h6">
              1. Call 911<br></br>
              2. Make sure the person is in a safe, comfortable position. Preferably, this should be lying on one side with their head slightly raised and supported in case they vomit.<br></br>
              3. Check to see if they’re breathing. If they’re not breathing, perform CPR per the instructions below: <br></br>
            </Typography>
            </tr>
            <tr>
              <CPRResults/><br></br>
            </tr>
            <tr>
            <Typography variant="h6">
            4. If they’re having difficulty breathing, loosen any constrictive clothing, such as a tie or scarf.<br></br>
            5. Cover them with a blanket to keep them warm.<br></br>
            6. Don’t give them anything to eat or drink.<br></br>
            </Typography>
            </tr>
          </table>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography className={classes.heading} variant="h5">Seizures</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
            1. Completely clear the area around them.<br></br>
            2. Loosen anything around the person's neck.<br></br>
            3. Do not restrain them or put anything in their mouth.<br></br>
            4. Place them on their side, to help keep their airway clear.<br></br>
            5. Stay with them after the seizure stops.<br></br>
            6. If seizure lasts longer than 5 minutes, CALL 911.<br></br>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography className={classes.heading} variant="h5">Broken Bones (Fractures)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
            1. Stop any bleeding.<br></br>
            2. Immobilize the injured area.<br></br>
            3. Apply ice packs to limit swelling and help relieve pain.<br></br>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography className={classes.heading} variant="h5">Major Burns</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          1. Protect the burned person from further harm.<br></br>
          2. Make certain that the person burned is breathing. <br></br>
          3. Remove jewelry, belts and other restrictive items.<br></br>
          4. Cover the area of the burn.<br></br>
          5. Don't immerse large severe burns in water.<br></br>
          6. Elevate the burned area.<br></br>
          7. Watch for signs of shock.<br></br>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <Typography className={classes.heading} variant="h5">Minor Burns</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          1. Cool the burn.<br></br>
          2. Remove rings or other tight items from the burned area.<br></br>
          3. Don't break blisters.<br></br>
          4. Apply lotion.<br></br>
          5. Bandage the burn.<br></br>
          6. If needed, take an over-the-counter pain relieve.<br></br>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10a-content"
          id="panel10a-header"
        >
          <Typography className={classes.heading} variant="h5">Suspected Poisoning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          <b>If the person is stable and has no symptoms or the person is going to be transported to the local emergency department,</b> call Poison Help at <b>800-222-1222</b><br></br>
          <b>Otherwise:</b><br></br>
          <b>Call 911 and perform following appropriate actions:</b><br></br>
          <b>Swallowed poison:</b> Remove anything remaining in the person's mouth. If the suspected poison is a household cleaner or other chemical, read the container's label and follow instructions for accidental poisoning.<br></br>
          <b>Poison on the skin:</b> Remove any contaminated clothing using gloves. Rinse the skin for 15 to 20 minutes in a shower or with a hose.<br></br>
          <b>Poison in the eye:</b> Gently flush the eye with cool or lukewarm water for 20 minutes or until help arrives.<br></br>
          <b>Inhaled poison:</b> Get the person into fresh air as soon as possible.<br></br>
          If the person vomits, turn his or her head to the side to prevent choking.<br></br>

          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </Container>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>

  );
}

export default Home;
