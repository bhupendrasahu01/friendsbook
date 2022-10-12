import React from 'react'
import './Posts.css'
import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'
import List from '../student/List'
//import { Home } from '@material-ui/icons'
import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
import { deepPurple, green } from '@material-ui/core/colors';

import axios from "axios";
import { useState } from "react";


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


const Posts = () => {
  const classes = useStyles();
 const [student, setStudent] = useState({
  desc:"",
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
  return (
  <>
  <Posts />
  </>
  );
 }
  return (
<>
   
    <div className="Posts">
      <form noValidate>
      <Grid container spacing={2}>
       <Grid item xs={12}>
        <TextField autoComplete="desc" name="desc" variant="outlined" required fullWidth id="desc" placeholder="What's happening "  onChange={e => onTextFieldChange(e)} />
       </Grid>
      </Grid>
      <Box m={3}>
       <Button className="button ps-button" type="submit"   fullWidth onClick={e => onFormSubmit(e)}>Share</Button>
      </Box>
     </form>


      <List/>
        {PostsData.map((post, id)=>{
            return(
          
  
            <Post data={post} id={id} />
        
            );
        })}
    </div>
    </>
  );
}

export default Posts
