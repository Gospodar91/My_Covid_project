import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}));


const SearchForm = ({ getQueryonSubmit, }) => {
  const classes = useStyles();
  return (
    <>
     <form className={classes.root} noValidate autoComplete="off" onSubmit={getQueryonSubmit}>

       <div > <TextField className='formDiv'
          label="Country"
          id="outlined-size-normal"
          defaultValue=""
          variant="filled"
          color='secondary'
          autoFocus
        />
      </div>
    </form>






      {/* <form className="form" onSubmit={getQueryonSubmit}>
        <input 
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search in country"
        />
      </form> */}
    </>
  );
};
export default SearchForm;
