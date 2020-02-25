import React from 'react';
import './App.css';
import MapContainer from './Map';
import Location from './Location';
import { withStyles } from '@material-ui/core/styles';

const App = ({ classes }) => {
  
  return (
    <div className="App">
      <header className="App-header">
        <Location />
        <div className={classes.container}>
          <MapContainer/>
        </div>
      </header>
    </div>
  );
}

const styles = () => ({
  container: {
    width: '100%'
  }
});

export default withStyles(styles)(App);
