import styled from "styled-components";
import tw from "tailwind-styled-components/dist/tailwind";

const StyledSelect = styled.select`
  padding-right: 2rem;
`;

export const Select = tw(StyledSelect)`
 border-border 
  border 
  mr-16 
  border-r 
  text-md 
  outline-none 
  py-[11.5px]
  rounded-sm 
  px-4 
`;

export const Container = tw.div`
    flex
`;
export const StickyNavContainer = tw.div`
  sticky
  top-0
  z-10
  bg-white

`;
export const NavContainer = tw.div`
  flex
  justify-between
  items-center
  border-b
  border-border
`;
export const ProfileContainer = tw.div`
  flex
  justify-center
  items-center
  my-3
  mx-10
  border
  rounded-sm
  py-12
  px-12
  border-border
`;

export const LinkContainer = tw.div`
  flex
  border-b
  border-border
`;
export const Link = tw.li`
  font-bold
  text-md 
  mr-40 
  text-textSecondary
  py-16
  cursor-pointer
`;

const StyledSearchsm = styled.input`
  background: ${(props) => `url(${props.icon}) no-repeat left`};
  background-position: 16px !important;
  padding-left: 46px;
`;

export const Searchsm = tw(StyledSearchsm)`
  border 
  w-[350px] 
  mr-24 
  rounded-sm 
  py-[10px]
  border-border 
  outline-none 
  bg-white
`;

export const Heading = tw.div`
  flex
  justify-between
  mx-10
  py-36
`;
export const HeadingActive = tw.div`
  font-bolder 
  text-xxl 
  text-textPrimary 
  leading-[160%]
`;

export const Button = tw.button`
  text-md 
  font-bold 
  leading-[24px] 
  ml-16 
  bg-primary 
  text-white 
  rounded-sm 
  py-[10px] 
  px-[30px] 
  text-center
`;

export const ProfileNotificationContainer = tw.div`
  basis-1/2 
  my-0 
  justify-center 
  items-center 
border-b-primary 
  pr-5 
  flex 
  border-r 
 border-[#ECEBF5]
`;

export const Notification = tw.div`
 bg-notification 
  px-1.5 
  text-white 
  rounded 
  text-default 
  ml-1.5
`;
