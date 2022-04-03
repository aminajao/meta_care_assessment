import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components/dist/tailwind";
import SearchIcon from "../assets/search.svg";

export const Searchbar = () => {
  return <Search icon={SearchIcon} placeholder="Ask us any questions" />;
};

const StyledSearch = styled.input`
  background: ${(props) => `url(${props.icon}) no-repeat left`};
  background-position: 96% !important;
`;

const Search = tw(StyledSearch)`
    !bg-gray
    rounded-md
    py-12
    !px-16
    outline-none
    w-[409px]
    mx-10
    my-2
    text-md
`;
