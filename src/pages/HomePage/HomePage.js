import React from "react";
import styled from "@emotion/styled";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const StyledHomePage = styled.div`
  section.main {
    background: ${props => props.theme.colors.gray["50"]};
    padding-bottom: 2rem;
    main {
      padding: 4rem 5rem;
    }
  }
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <Header />
      <section className="main">
        <main>{/* TODO: Form will go here */}</main>
      </section>
      <Footer />
    </StyledHomePage>
  );
};

export default HomePage;
