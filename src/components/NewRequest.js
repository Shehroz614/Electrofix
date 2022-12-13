import React, { useEffect, useState } from "react";
// import agents from "../helpers/Agents";
import { get } from "../helpers/FetchApi";
import { motion } from "framer-motion";
import NewOrderModal from "./NewOrderModal";
import NewOrderMessageModal from "./NewOrderMessageModal";



function NewRequest() {
  const [agents, setAgents] = useState([]);
  const [open, setOpen] = useState(false);
  const [openM, setOpenM] = useState(false);
  const [CurAgent, setCurAgent] = useState(null);

  const getAgents = async () => {
    const users = await get("http://localhost:5000/api/auth/", {});
    const userAgents = users.filter(function (user) {
      if (user.userType !== "agent") {
        return false; // skip
      }
      return true;
    });
    console.log("These are all agents");
    console.log(userAgents);
    setAgents(userAgents);
  };

  useEffect(() => {
    getAgents();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="NewRequestDiv">
      <h2>Make a new Request</h2>
      <div className="options">
        <div>
          <label htmlFor="serviceType">Select Service</label>
          <select className="serviceType" name="serviceType" id="serviceType">
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

      <div className="SearchButtonDiv">
        <button>Search</button>
      </div>

      <div className="showAgents">
      <div className="agent"><div>Image</div><div>Name</div><div>City</div><div>Skills</div><div>Rating</div><div></div></div>
        {agents.map((agent, index) => {
          return (
            <div className="agent" key={index}>
              <div>{agent.image}img</div> <div>{agent.fname}</div>
              <div>{agent.city}</div>
              <div>
                {agent.skills.map((v, index) => (
                  <div key={index}>
                    {v.skill}
                    <br></br>
                  </div>
                ))}
              </div>
              <div>{agent.rating}</div>
              <div>
                <motion.button
                  onClick={() => {
                    setCurAgent(agent._id);
                    setOpen(!open);
                  }}
                  className="orderButton"
                  whileTap={{ scale: 0.9 }}
                >
                  Order
                </motion.button>
                <motion.button
                  onClick={() => {
                    setCurAgent(agent._id);
                    setOpenM(!openM);
                  }}
                  className="messageButton"
                  whileTap={{ scale: 0.9 }}
                >
                  Message
                </motion.button>
              </div>
            </div>
          );
        })}
      </div>
      {open && (<NewOrderModal open={open} setOpen={setOpen} agent={CurAgent} />)}
      {openM && ( <NewOrderMessageModal open={openM} setOpen={setOpenM} agent={CurAgent} />)}
    </div>
  );
}

export default NewRequest;
