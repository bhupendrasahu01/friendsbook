import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip, colors } from "@material-ui/core"
import { blueGrey } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";

const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF"
    }
  })(Typography);

const useStyles = makeStyles({
 stuListColor: {
  backgroundColor: blueGrey[400],
  color: "white"
 },
 tableHeadCell: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
 },
})

const List = () => {
 const classes = useStyles();
 const [students, setStudents] = useState([]);

 useEffect(() => {
  async function getAllStudent() {
   try {
    const students = await axios.get("http://localhost:3333/students")
    // console.log(students.data);
    setStudents(students.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getAllStudent();
 }, [])

 const handleDelete = async id => {
  await axios.delete(`http://localhost:3333/students/${id}`);
  var newstudent = students.filter((item) => {
   // console.log(item);
   return item.id !== id;
  })
  setStudents(newstudent);
 }


 return (
  <>
   <Box textAlign="center" p={2} className={classes.stuListColor}>
    {/* <Typography variant="h10">Your New Post</Typography> */}
    <WhiteTextTypography variant="h10">
    Your New Post
      </WhiteTextTypography>
   </Box>
   <TableContainer component={Paper}>
    <Table>
     
     <TableBody>
      {
       students.map((student, i) => {
        return (
         <TableRow key={i}>
      
          <TableCell align="center">{student.desc}</TableCell>
          <TableCell align="center">
          
           <Tooltip title="Edit">
            <IconButton><Link to={`/edit/${student.id}`}><EditIcon /></Link></IconButton>
           </Tooltip>
           <Tooltip title="Delete">
            <IconButton onClick={() => handleDelete(student.id)}><DeleteIcon color="secondary" /></IconButton>
           </Tooltip>
          </TableCell>
         </TableRow>
        )
       })
      }

     </TableBody>
    </Table>
   </TableContainer>
  </>
 )
}

export default List






