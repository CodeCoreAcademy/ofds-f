import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export default function CustomSnackbar(props) {
  //params: msg, open, setOpen, vertical, horizontal

  // vertical: 'top',
  // horizontal: 'center',

  // vertical: 'top',
  // horizontal: 'right',

  // vertical: 'bottom',
  // horizontal: 'right',

  // vertical: 'bottom',
  // horizontal: 'center',

  // vertical: 'bottom',
  // horizontal: 'left',

  // vertical: 'top',
  // horizontal: 'left',
  
//   const handleClick = (newState) => () => {
//     setState({ open: true, ...newState });
//   };

  const handleClose = () => {
    setOpen(false);
  };
  
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="primary"
        onClick={()=>props.setOpen(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  
  return (
    <Snackbar
      anchorOrigin={ {vertical:props.vertical, horizontal:props.horizontal} }
      // achorOrigin = {{vertical,  horizontal}}
       open={props.open}
      
      onClose={()=>props.setOpen(false)}
      message={props.msg}
      autoHideDuration={6000}
      action={action}
      sx={{
        div : {
          backgroundColor: '#4a0072',
        }
      }}
    />
  );
}
