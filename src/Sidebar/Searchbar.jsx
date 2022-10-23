import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '15ch'
      },
    },
  }));
export default function Searchbar(){
    const classes = useStyles();
    return (   <form className={classes.root} noValidate autoComplete="off">
    {/* <TextField id="standard-basic" label="Standard" />
    <TextField id="filled-basic" label="Filled" variant="filled" /> */}
    <TextField margin="dense" id="outlined-basic" label="Search" variant="outlined" />
  </form>
)
}