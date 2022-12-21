import React, { useEffect, useState } from 'react'
import {get} from '../helpers/FetchApi';

function ProfileDiv() {

  const [ThisUser, setThisUser] = useState([]);

  
  useEffect( () => {
    async function fetch() {
    const user = await get("http://localhost:5000/api/auth/getuser");
    setThisUser(user);
    }
    fetch();
  }, [])


  const calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    return age_now;
  }


  return (
    <div className='ProfileDiv'>
      <h2 style={{textAlign: "center"}}>Profile</h2>
      <div className='ProfileUpper'>
        <div>
         <h4>image</h4>
        </div>
        <div>
         <h3>First Name: {ThisUser.fname}</h3>
         <h3>Last Name: {ThisUser.lname}</h3>
         <h3>Age: {calculate_age(ThisUser.DOB)}</h3>
         <h3>City: {ThisUser.city}</h3>
        </div>
      </div>

      <hr></hr>

      <div className='ProfileLower'>
      {(ThisUser.userType === "agent") &&  <h3>Skills: {ThisUser.skills.map((v, index) => (
                  <span key={index}>
                    {v.skill+"\n"}
                  </span>
                ))}</h3>}
         <h3>Date Joined: {ThisUser.dateJoined &&  ThisUser.dateJoined.slice(0,10)}</h3>
         {(ThisUser.userType === "agent") &&  <h3>Rating: {ThisUser.rating}</h3>}
         {(ThisUser.userType === "agent") &&  <h3>Earning: {ThisUser.earned}</h3>}
         {(ThisUser.userType === "client") &&  <h3>Spent: {ThisUser.spent}</h3>}

      </div>


     
     </div>
  )
}

export default ProfileDiv
