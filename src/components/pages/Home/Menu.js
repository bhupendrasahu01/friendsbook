import React from 'react'
import Images from '../../Image'
import InfoCard from '../../InfoCard/InfoCard'
// import InfoCard from '../../InfoCard/InfoCard'
import PostSide from '../../PostSide/PostSide'
import ProfileSide from '../../profileSide/ProfileSide'
import RightSide from '../../RightSide/RightSide'
import Home from './Home'
// import PostSide from '../../components/PostSide/PostSide'
// import ProfileSide from '../../components/profileSide/ProfileSide'
// import RightSide from '../../components/RightSide/RightSide'
// import {Link} from 'react-router-dom'
import './Home.css'
const Menu = () => {
  return (
    <div className="Home">
     
      <ProfileSide/>

       
        <PostSide/>
      
       
        <RightSide />
    </div>
  );
}

export default Menu