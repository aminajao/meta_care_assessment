import React from "react";
import Calendar from "../../assets/calendar.svg";
import { LineChart } from "../index";
import Divider from "../../assets/divider.svg";
import {
  CalendarIconContainer,
  CalendarIcon,
  ChartContainer,
  Heading,
  LeftContainerHeading,
  Priority,
  ResponseCard,
  ResponseTime,
  CalendarContainer,
  Container,
  LeftContentContainer,
  Percentage,
  PriorityCalenderContainer,
  ResponseTitle,
  RightContentContainer,
} from "./styles";

export const AnalyticsCard = ({ data }) => {
  return (
    <Container>
      <LeftContentContainer>
        <LeftContainerHeading>
          <div className="flex">
            <Heading>{data?.title}</Heading>
            <Percentage>{data.percentage}</Percentage>
          </div>
          <PriorityCalenderContainer>
            <span className="mr-8">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="10" height="10" rx="2" fill="#F05D23" />
              </svg>
            </span>
            <Priority>High Priority</Priority>
            <img src={Divider} alt="" className="inline-block" />
            <CalendarContainer>
              <p>This Month</p>
              <CalendarIconContainer>
                <CalendarIcon src={Calendar} alt="Calendar icon" />
              </CalendarIconContainer>
            </CalendarContainer>
          </PriorityCalenderContainer>
        </LeftContainerHeading>
        <ChartContainer>
          <LineChart defaultColors={[data.color]} graph={data.graph} />
        </ChartContainer>
      </LeftContentContainer>

      <RightContentContainer>
        {data.others.map((each) => {
          return (
            <ResponseCard>
              <ResponseTitle>{each.title}</ResponseTitle>
              <ResponseTime>{each.time}</ResponseTime>
            </ResponseCard>
          );
        })}
      </RightContentContainer>
    </Container>
  );
};
