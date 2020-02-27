import React from 'react';
import './App.css';
import MapContainer from './Map';
import Location from './Location';
import { withStyles } from '@material-ui/core/styles';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import {AppContext} from './AppContext';

const App = ({ classes }) => {
  const {
    markersData,
    get10LastYear
  } = React.useContext(AppContext);

  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.header}>
          <Location />
          <label className={classes.counter}>count: {markersData.length}</label>
          <div onClick={get10LastYear} className={classes.star}>
            <StarsRoundedIcon color={'primary'} className={classes.starIcon} />
            Last Earthquakes!
          </div>
        </div>
      </header>
      <div className={classes.container}>
        <MapContainer />
      </div>
    </div>
  );
}

const styles = () => ({
  container: {
    width: '100%'
  },
  header: {
    display: 'flex',
    width: '100%'
  }, 
  counter:{ 
    margin: 'auto',
    padding: '15px 20px',
    borderRadius: '10px',
    backgroundColor: '#ffffff69',
  },
  star:{ 
    margin: 'auto',
    padding: '15px 20px',
    borderRadius: '10px',
    backgroundColor: '#ffffff69',
    cursor: 'pointer',
    display: 'flex',
    verticalAlign: 'middle'
  },
  starIcon: {
    paddingRight: '5px'
  },

  [`@media (max-width: ${1000}px)`]: {
    header: {
      display: 'block',
      width: '80%',
      margin: 'auto'
    }, 

    counter: {
      display: 'block',
      margin: '10px 0px' 
    },

    star: {
      display: 'block',
      margin: '10px 0px' 
    },
  }
});

export default withStyles(styles)(App);
