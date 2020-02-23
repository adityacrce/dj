import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import DropzoneAreaExample from './resumedrop';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = props => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
      setOpen(!open)
  }

  return (
    <Card style={{ marginBottom: "30px" }} className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.org}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Mass Recruiter
        </Typography>
        <Typography variant="body2" component="p">
          Apply now!
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
      {!open && (
            <Button style={{ margin: "20px" }} variant="contained" color="secondary" onClick={handleOpen} size="small">Upload Resume</Button>
        )}
        
        {open && (
            <DropzoneAreaExample />
        )}
        
      </CardActions>
      <div>
            {open && (
                 <Button variant="contained" style={{ margin: "20px", padding: "5px", paddingLeft: "10px", paddingRight: "10px" }} color="primary" onClick={handleOpen}>
                 UPLOAD
                 </Button>
            )}
            {open && (
                <Button variant="contained" style={{ margin: "20px", padding: "5px", paddingLeft: "10px", paddingRight: "10px" }} color="secondary" href="#contained-buttons" onClick={handleOpen}>
                CANCEL
            </Button>
            )}
            
        </div>
    </Card>
  );
}

export default SimpleCard;