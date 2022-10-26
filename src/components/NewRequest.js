import React from "react";

function NewRequest() {
  return (
    <div className="NewRequestDiv">
      <h2>Make a new Request</h2>
      <div className="options">

        <div>
        <label for="sericeType">Select Service</label>
        <select className="sericeType" name="sericeType" id="sericeType" >
          <option value="Plumber">Plumber</option>
          <option value="Vehicle Repair">Vehicle Repair</option>
          <option value="Laptop Repair">Laptop Repair</option>
        </select>
        </div>


        <div>
        <label for="city">Select City</label>
        <select className="city" name="city" id="city">
          <option value="Lahore">Plumber</option>
          <option value="Islamabad">Vehicle Repair</option>
          <option value="Karachi">Laptop Repair</option>
        </select>
        </div>


        <div>
        <label for="sortBy">Sort By</label>
        <select className="sortBy" name="sortBy" id="sortBy">
          <option value="Name Ascending">Name Ascending</option>
          <option value="Name Descending">Name Descending</option>
          <option value="Rating">Rating</option>
        </select>
        </div>


        <div>
        <label for="Rating">Rating</label>
        <select className="Rating" name="Rating" id="Rating">
            <option value="" selected></option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        </div>


      </div>

      <div className="showAgents">

      </div>
    </div>
  );
}

export default NewRequest;
