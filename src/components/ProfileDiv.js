import React, { useEffect, useState } from 'react'
import {get} from '../helpers/FetchApi';
import EditIcon from '@mui/icons-material/Edit';

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
        <div className='profileImage'>
         <img src="/Assets/images/shehroz.jpeg" alt="" />
         <p className='imageEdit'>Edit</p>
        </div>
        <div>
         <div><h3>First Name: </h3>{ThisUser.fname}</div>
         {/* <div style={{"display":"flex"}}><h3>First Name: </h3><p style={{"marginTop" : "7%", "marginLeft" : "3%"}}>{ThisUser.fname}</p></div> */}
         <div><h3>Last Name: </h3>{ThisUser.lname}</div>
         <div> <h3>Age: </h3>{calculate_age(ThisUser.DOB)}</div>
         <div><h3>City: </h3>{ThisUser.city}</div>
        </div>
      </div>

      <hr></hr>

      <div className='ProfileLower'>
      {(ThisUser.userType === "agent") &&  <div><h3>Skills: </h3>{ThisUser.skills.map((v, index) => (
                  <span key={index}>
                    {v.skill+"\n"}
                  </span>
                ))}<span className="EditIcon"><EditIcon style={{"fontSize":"16px", "color" : "blue"}} /> </span></div>}
        <div> <h3>Date Joined: </h3>{ThisUser.dateJoined &&  ThisUser.dateJoined.slice(0,10)}</div>
         {(ThisUser.userType === "agent") &&  <div><h3>Rating: </h3>{ThisUser.rating}</div>}
         {(ThisUser.userType === "agent") &&  <div><h3>Earning: </h3>{ThisUser.earning}</div>}
         {(ThisUser.userType === "client") && <div> <h3>Spent: </h3>{ThisUser.spent}</div>}

      </div>


     
     </div>
  )
}

export default ProfileDiv
