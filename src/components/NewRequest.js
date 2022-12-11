import React from "react";
import agents from "../helpers/Agents";
import { get } from "../helpers/FetchApi";

function NewRequest() {


   const getAgents = async () => {
    const users = await get("http://localhost:5000/api/auth/",{});
    console.log("These are all users");
    console.log(users);
    const userAgents = users.filter(function(user) {
        if (user.userType !== "agent") {
          return false; // skip
        }
        return true;
      });
      console.log("These are all agents");
      console.log(userAgents);
      

   }


  return (
    <div className="NewRequestDiv">
      <h2>Make a new Request</h2>
      <div className="options">

        <div>
        <label htmlFor="serviceType">Select Service</label>
        <select className="serviceType" name="serviceType" id="serviceType" >
          <option value="Plumber">Plumber</option>
          <option value="Vehicle Repair">Vehicle Repair</option>
          <option value="Laptop Repair">Laptop Repair</option>
        </select>
        </div>


        <div>
        <label htmlFor="city">Select City</label>
        <select className="city" name="city" id="city">
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Karachi">Karachi</option>
        </select>
        </div>


        <div>
        <label htmlFor="sortBy">Sort By</label>
        <select className="sortBy" name="sortBy" id="sortBy">
          <option value="Name Ascending">Name Ascending</option>
          <option value="Name Descending">Name Descending</option>
          <option value="Rating">Rating</option>
        </select>
        </div>


        <div>
        <label htmlFor="Rating">Rating</label>
        <select className="Rating" name="Rating" id="Rating">
            <option value="">All</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        </div>
        

      </div>

      <div className="showAgents" onClick={getAgents}>
        {
        agents.map((agent, index) => {
          
            return (
                <div className="agent" key={index}> <div>{agent.image}</div> <div>{agent.name}</div> <div>{agent.city}</div> <div>{agent.skills}</div> <div>{agent.rating}</div></div>
            );
        })
        }
      </div>
    </div>
  );
}

export default NewRequest;
