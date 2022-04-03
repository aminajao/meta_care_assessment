import React, { useState } from "react";
import { Logo, SideBar } from "../../components";
import { Container } from "./Styled";
import { sideLinks } from "../../constants/data";
import tw from "tailwind-styled-components/dist/tailwind";

export const SideBarContainer = () => {
  return (
    <Container>
      <Logo />
      <SideLinkContainer>
        {sideLinks.map((sideLink) => {
          return <SideBar data={sideLink} />;
        })}
      </SideLinkContainer>
    </Container>
  );
};

const SideLinkContainer = tw.div`
  mx-4
  my-10
`;
