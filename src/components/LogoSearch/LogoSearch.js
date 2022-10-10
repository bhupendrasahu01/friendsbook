import React from 'react'
import './LogoSearch.css'
import Logo from '../../img/logo.png'
import Search from '../../img/search.png'
const LogoSearch = () => {
  return (
   <div className="LogoSearch">
        
       <img src={Logo} alt="" />
       <div className="Search">
           <input type="text" placeholder='#Explore' />
   

       </div>
   </div>
  )
}

export default LogoSearch