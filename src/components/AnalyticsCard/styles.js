import tw from "tailwind-styled-components/dist/tailwind";
import styled from "styled-components";

export const Container = tw.div`
    flex
    border
    border-border
    rounded-md
    mb-24
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 225px;
  padding-top: 16px;
  position: relative;
  margin: auto;
  overflow: hidden;
`;
export const RightContentContainer = tw.div`
    box-content 
    py-32 
    px-24 
    w-[235px] 
    border-border 
    border-l
`;
export const ResponseCard = tw.div`
    bg-gray 
    pb-24 
    first:mb-18 
    border-[#ECEBF5] 
    border 
    rounded-md 
    pt-[30px] 
    pl-16
`;
export const ResponseTitle = tw.p`
    font-bold 
    text-sm 
    text-textSecondary 
    mb-8
`;
export const ResponseTime = tw.h2`
  text-textPrimary 
    font-bold 
    text-xl
`;

export const LeftContentContainer = tw.div`
    py-[26px] 
    px-24 
    w-full
`;
export const LeftContainerHeading = tw.div`
    flex 
    justify-between
`;

export const Heading = tw.h2`
   text-textPrimary 
    font-bolder 
    text-lg 
    leading-[26px] 
    mr-16
`;

const StyledPercentage = styled.span`
  background-color: rgba(37, 187, 135, 0.1);
`;
export const Percentage = tw(StyledPercentage)`
    font-bolder
    h-[28px] 
    text-default 
    flex 
    justify-center 
    items-center 
    px-12 
    text-primary 
    rounded-[4px]
`;

export const PriorityCalenderContainer = tw.div`
    flex 
    justify-center 
    items-center
`;

export const Priority = tw.p`
    text-textPrimary 
    text-sm 
    font-[500] 
    mr-16
`;
export const CalendarContainer = tw.div`
    flex 
    ml-16 
    justify-center 
    items-center 
    py-8 
    px-16 
    border 
    rounded-sm 
    border-border
`;
export const CalendarIconContainer = tw.div`
    ml-6 
    w-[15px] 
    h-[15px]
`;
export const CalendarIcon = tw.img`
    w-full 
    h-full
`;
