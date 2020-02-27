import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import {AppContext} from './AppContext';

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));

const Location = ({classes}) => {
  const classesIcon = useStyles();
  const {
    handleChange,
    onChangeValue,
    options
  } = React.useContext(AppContext);
  return (
    <Autocomplete
      id="google-map-demo"
      className={classes.autocomplete}
      getOptionLabel={option => (typeof option === 'string' ? option : option.description)}
      filterOptions={x => x}
      options={options}
      autoComplete
      includeInputInList
      disableOpenOnFocus
      onChange={onChangeValue}
      renderInput={params => (
        <TextField
          {...params}
          label="Add a location"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
      )}
      renderOption={option => {
        const matches = option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map(match => [match.offset, match.offset + match.length]),
        );

        return (
          <Grid container alignItems="center">
            <Grid item>
              <LocationOnIcon className={classesIcon.icon} />
            </Grid>
            <Grid item xs>
              {parts.map((part, index) => (
                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                  {part.text}
                </span>
              ))}

              <Typography variant="body2" color="textSecondary">
                {option.structured_formatting.secondary_text}
              </Typography>
            </Grid>
          </Grid>
        )
      }}
    />
  );
};

const styles = () => ({
  autocomplete: {
    width: '75%', 
    margin: '20px 20px 20px 10px' 
  },

  [`@media (max-width: ${1000}px)`]: {
    autocomplete: {
      width: '100%', 
      margin: '10px 0px' 
    }
  }
});

export default withStyles(styles)(Location);