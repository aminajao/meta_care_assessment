import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Arrow from "../assets/arrow.svg";
import styled from "styled-components";

export const SideBar = ({ data }) => {
  return (
    <>
      <Container key={data?.id} id={data.id}>
        <IconContainer>
          <img src={data.Icon} alt="" />
        </IconContainer>
        <Text id={data.id}>{data.name}</Text>
        <ArrowContainer>
          <img src={Arrow} alt="" />
        </ArrowContainer>
      </Container>
      <DropdownContainer>
        {data?.subLinks &&
          data.subLinks.map((subLink) => {
            return <SubLink>{subLink}</SubLink>;
          })}
      </DropdownContainer>
    </>
  );
};

const StyledContainer = styled.div`
  margin-bottom: ${(props) => (props.id === 6 ? "12px" : "")} !important;
`;
const Container = tw(StyledContainer)`
    flex
    mb-[30px]
    justify-start
    items-center
    pr-[20px]
    cursor-pointer
`;
const IconContainer = tw.div`
    mr-18    
`;
const ArrowContainer = tw.div`
    ml-auto
`;
const StyledText = styled.p`
  color: ${(props) => (props.id === 6 ? "#6837EF" : "")};
`;
const Text = tw(StyledText)`
    text-textSecondary
    text-md
    font-bold
`;

const DropdownContainer = tw.div`
    ml-[22px]
    text-textSecondary
    text-md
    font-bold
`;

const SubLink = tw.p`
    mb-2
    first:border-l
    border-[#ECEBF5]
    pl-4
    cursor-pointer
    first:text-textPrimary
`;
