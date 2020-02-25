import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import Button from '@material-ui/core/Button';

const Location = ({ classes }) => {
  
  return (
    <div className={classes.location}>
      <TextField
        id="input-with-icon-textfield"
        label="City"
        fullWidth
        className={classes.textfield}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RoomOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button className={classes.button} variant="contained" color="primary">
        Show
      </Button>
    </div>
  );
}

const styles = () => ({
  location: {
    width: '85%',
    display: 'flex'
  },
  
  textfield: {
    marginRight: '20px'
  }

});

export default withStyles(styles)(Location);