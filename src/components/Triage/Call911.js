import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';

function Call911() {
  return (
    <div className="Call911">
    <Typography variant="h4" >
      Call 911
    </Typography>
    <Typography variant="h4" >
      Be sure to elevate the patient's head and bring the patient to fresh air
    </Typography>
    <Typography variant="h4" >
      Monitor the patient's condition and wait for EMS
    </Typography>
    </div>

  );
}

export default Call911;
