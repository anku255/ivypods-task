import React, { useState } from "react";
import styled from "@emotion/styled";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UserForm from "./UserForm";
import FromDataModal from "./data/FromDataModal";

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userData, setUserData] = useState({});
  return (
    <StyledHomePage>
      <Header />
      <section className="main">
        <main>
          <UserForm
            handleSubmit={data => {
              setUserData(data);
              setIsModalVisible(true);
            }}
          />
        </main>
        <FromDataModal
          data={userData}
          isOpen={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      </section>
      <Footer />
    </StyledHomePage>
  );
};

export default HomePage;
