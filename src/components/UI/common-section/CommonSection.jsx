import React from "react";
import { Container } from "reactstrap";
import "../../../styles/common-section.css";

const CommonSection = (props) => {
  return (
    <section className="common_section">
      <Container>
        <h1 className="text-center">{props.title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection;
