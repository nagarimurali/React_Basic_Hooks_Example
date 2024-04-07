import React from 'react'
import{useParams} from 'react-router-dom'
import userData from './userData'

const UserDetails = () => {
    const {userId}=useParams();
    const userIdNumber = parseInt(userId);
    const userDetailData=userData.find((eachItem)=>eachItem.id===userIdNumber);
    console.log("userDetailData",userDetailData);
  return (
    <div>
      <h1>UserDetails</h1>
      <h2>{userDetailData.name}</h2>
      <h3>{userDetailData.email}</h3>
      <h3>{userDetailData.username}</h3>
    </div>
  )
}

export default UserDetails
