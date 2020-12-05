import logo from './logo.svg';
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Alert from '@material-ui/lab/Alert';
import Conscious from './components/Conscious';
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import HomeIcon from '@material-ui/icons/Home';
function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href="/">
            <HomeIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            MyEmergency
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/step1" exact component={Conscious} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
