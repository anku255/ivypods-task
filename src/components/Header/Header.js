import React from "react";
import styled from "@emotion/styled";
import { Avatar, Box, Badge } from "@chakra-ui/core";
import { FaRegBell } from "react-icons/fa";

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
      .logo {
        max-width: 8rem;
      }
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
        {/* <div className="nav__right">
          <div className="notification">
            <Box as={FaRegBell} size="32px" color="#A6A6A6" />
            <Badge style={{ borderRadius: "50%" }} fontSize="0.7em">
              699
            </Badge>
          </div>
          <div className="avatar">
            <Avatar
              style={{ background: "#B3E77F", color: "#FFF" }}
              size="sm"
              name="A B"
            />
          </div>
        </div> */}
      </nav>
    </StyledHeader>
  );
};

export default Header;
