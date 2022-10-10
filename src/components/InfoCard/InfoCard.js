import React, { useState } from "react";
import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
import { deepPurple, green } from '@material-ui/core/colors';

import axios from "axios";
import List from "../student/List";


// import "./InfoCard.css";
// import { UilPen } from "@iconscout/react-unicons";
// import View from "../student/View";
// import Edit from "../student/Edit";

const useStyles = makeStyles({
  headingColor: {
   backgroundColor: deepPurple[400],
   color: "white"
  },
  addStuColor: {
   backgroundColor: green[400],
   color: "white"
  },
 })

const InfoCard = () => {
  const classes = useStyles();
  const [student, setStudent] = useState({
   stuname: "",
   email: ""
  });
  const [status, setStatus] = useState();
 
  function onTextFieldChange(e) {
   setStudent({
    ...student,
    [e.target.name]: e.target.value
   })
  }
 
  async function onFormSubmit(e) {
   e.preventDefault()
   try {
    await axios.post(`http://localhost:3333/students`, student)
    setStatus(true);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  if (status) {
   return 
   <>

   <InfoCard />
   </>
  }
  return (
    <>
    
   <Grid container justify="center" spacing={4}>
    <Grid item md={6} xs={12}>
     <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
      <Typography variant="h4">Edit Your Information</Typography>
     </Box>
     <form noValidate>
      <Grid container spacing={2}>
       <Grid item xs={12}>
        <TextField autoComplete="stuname" name="stuname" variant="outlined" required fullWidth id="stuname" label="Name" onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="Email Address" onChange={e => onTextFieldChange(e)} />
       </Grid>
      </Grid>
      <Box m={3}>
       <Button type="submit" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)}>Add</Button>
      </Box>
     </form>
    </Grid>
   
    
   </Grid>
  </>
    
    
    // <div className="InfoCard">
    //   <div className="infoHead">
    //     <h4>Your Info</h4>
    //     <div>
    //       <UilPen
    //         width="2rem"
    //         height="1.2rem"
    //         onClick={() => setModalOpened(true)}
    //       />
    //       <ProfileModal
    //         modalOpened={modalOpened}
    //         setModalOpened={setModalOpened}
    //       />
    //     </div>
    //   </div>

    //   <div className="info">
    //     <span>
    //       <b>Status </b>
    //     </span>
    //     <span>in Relationship</span>
    //   </div>

    //   <div className="info">
    //     <span>
    //       <b>Lives in </b>
    //     </span>
    //     <span>Multan</span>
    //   </div>

    //   <div className="info">
    //     <span>
    //       <b>Works at </b>
    //     </span>
    //     <span>Zainkeepscode inst</span>
    //   </div>

    //   <button className="button logout-button">Logout</button>
    // </div>
  );
};

export default InfoCard;
