import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import css from './searchForm.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

const SearchForm = ({ getQueryonSubmit }) => {
  const classes = useStyles();
  return (
    <>
    <div className={css.SearchFormContainer}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={getQueryonSubmit}
      >
        <div>
          <TextField
            className="formDiv"
            label="Country"
            id="outlined-size-normal"
            defaultValue=""
            variant="filled"
            color="secondary"
            autoFocus
          />
        </div>
      </form>
      </div>
    </>
  );
};
export default SearchForm;
