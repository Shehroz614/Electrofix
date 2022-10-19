import React from "react";
import "../css/About.css";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="About">
      <div className="About1">
        <h1>About Us</h1>
        <h3>Make Everyday life Simple</h3>
      </div>
      <div className="About2">
        <div>{/* <img src="/Assets/images/About.jpg" alt="" /> */}</div>
        <div>
          <h2 style={{ marginBottom: "50px" }}>One place for all your needs</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
