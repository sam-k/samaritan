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

function Home() {
  if (localStorage.getItem("open") != "false") {
    localStorage.setItem("open", true);
  }
  const [open, setOpen] = useState(JSON.parse(localStorage.getItem("open")));

  const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    }
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
      onClose={handleClose}
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
      <Typography variant="h8" className='blurb'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
      </Typography>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Typography variant="h4" className={classes.title}>
        Diagnosis Helper
      </Typography>
      <Divider />


    </Container>
    </div>

  );
}

export default Home;
