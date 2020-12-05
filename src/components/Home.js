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
    },
    media: {
      height: 140,
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
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Typography variant="h2" className={classes.title}>
        MyEmergency
      </Typography>
      <br></br>
      <Typography variant="body2" className='blurb'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
      </Typography>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Typography variant="h4" className={classes.title}>
        Diagnosis Helper
      </Typography>
      <Divider />
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea href="/step1">
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Medical Emergency
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>



        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Mental Health Emergency
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </div>

  );
}

export default Home;
