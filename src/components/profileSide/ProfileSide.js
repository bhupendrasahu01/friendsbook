import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard.jsx/ProfileCard'
// import FollowersCard from '../FollowersCard/FollowersCard'
// import LogoSearch from '../LogoSearch/LogoSearch'
// import ProfileCard from '../ProfileCard.jsx/ProfileCard'

import "./ProfileSide.css"
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <div className="Webnamee">
      <h1>FriendsBook</h1>
      </div>
        <LogoSearch />
        <ProfileCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileSide