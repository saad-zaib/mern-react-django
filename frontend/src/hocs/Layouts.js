import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import  Navbar  from '../components/Navbar'
function Layouts(props) {
  return (
    // Navbar will remains on the top for every route component
    <div> <CssBaseline />
    <Navbar />
    <Outlet />
    </div>
    
  )
}

export default Layouts