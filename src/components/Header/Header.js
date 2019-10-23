import React from "react";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  nav {
    display: flex;
    flex: 1;
    height: 60px;
    padding: 0.5rem 5rem;
    background: #ffffff;
    box-shadow: 0 2px 8px #f0f1f2;

    a {
      display: flex;
      height: 100%;
      align-items: center;
      font-size: 1.2rem;
      font-weight: bold;
    }

    .grow {
      flex: 1;
    }
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <div className="nav__left">
          <a href="/" aria-label="WhitePanda">
            IvyPods
          </a>
        </div>
        <div className="grow"></div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
