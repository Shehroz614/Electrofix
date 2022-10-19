import React from "react";
import "../css/Contact.css";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
      <div className="Contact">
        <div className="ContactLeft">
          <div>
            <h1 style={{ fontWeight: "500", marginBottom: "60px" }}>
              We'd love to
              <br />
              hear from you
            </h1>
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div>
                  <CallIcon />
                </div>
                <h3>Call Us</h3>
              </div>
              <p>046 252566, 046 5533625</p>
            </div>
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div>
                  <LocationOnIcon />
                </div>
                <h3>Location</h3>
              </div>
              <p>
                Jail Road, Gulberg, near <br />
                Mehmood Plaza. Islamabad
              </p>
            </div>
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div>
                  <QueryBuilderIcon />
                </div>
                <h3>Business Hours</h3>
              </div>
              <p>Mon-Fri.....8:00 AM-6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="ContactRight">
          <ContactForm/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
