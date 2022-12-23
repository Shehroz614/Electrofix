import React, { useEffect, useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {post, patch, get} from "../helpers/FetchApi"

function SkillsModal(props) {
    
  const [skills, setSkills] = useState([]);

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChange = (e) => {
    setSkills(skills => [...skills, e.target.value]);   
  };

  const handleSkillClose = (v) => {
    setSkills(skills => skills.filter(item => item !== v));
  }


  useEffect(() => {
    props.user.skills.map((v) => setSkills(skills => [...skills, v.skill]));
    // eslint-disable-next-line
  }, []);



  const saveSkills = async () => {
    var skillIds= [];


   skills.map(async (v) => {
        const data = {
            user : props.user._id,
            skill : v
        }
        const newSkill = await post("http://localhost:5000/api/skills/add/", data);
        skillIds.push(newSkill._id);
        
        const data2 ={
            skills : skillIds
        }
        await patch("http://localhost:5000/api/auth/update", data2);
        props.setUser(await get("http://localhost:5000/api/auth/getuser"));
        return(<></>);
   })


   props.setOpen(false);
   console.log(skillIds);
        
  }


  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="NewOrderModalDiv">
          <Box>
            <div className="OrderModalTitle">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Edit Skills
              </Typography>{" "}
            </div>

            <div className="skillsDiv">
              <div>
                <select
                  className="selectSkills"
                  name="skills"
                  onChange={handleChange}
                >
                  <option value=" " disabled selected>
                    select your skills
                  </option>
                  <option value="Carpenter">Carpenter</option>
                  <option value="IT Expert">IT Expert</option>
                  <option value="Plumber">Plumber</option>
                  <option value="Painter">Painter</option>
                </select>
              </div>
              <div style={{"display": "flex", "flexWrap" : "wrap", "gap" : "10px"}}>
                {skills.map((v, index) => {
                  return (
                  <div className="addedSkills" key={index}>
                    {v}<span onClick={() => {handleSkillClose(v)}}><CloseIcon sx={{"fontSize": "16px", "cursor" : "pointer"}}/></span>
                  </div>
                )})}
              </div>
            </div>

            <div className="OrderModalButtons">
              <div>
                <button onClick={saveSkills}>Save</button>
              </div>
              <div>
                <button onClick={handleClose}>Cancel</button>
              </div>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default SkillsModal;
