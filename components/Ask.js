import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Ask(props) {//open, setAnswer
    const { title, body, open, setOpen, onConfirm, onDecline=()=>{} } = props;
//   const [open, setOpen] = React.useState(props.open); 
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const affirmative = () => {
    onConfirm()
    setOpen(false);
  };
  const negative = () => {
    onDecline()
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        {
            body
            ?<DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                {body}
                </DialogContentText>
            </DialogContent>
            :''
        }
        <DialogActions>
          <Button onClick={affirmative} variant="contained" color="primary">Yes</Button>
          <Button onClick={negative} variant="contained" >No</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
