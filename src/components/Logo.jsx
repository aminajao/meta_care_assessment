import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";

export const Logo = () => {
  return (
    <Container>
      <Heading>Metacare</Heading>
      <Text>adeyinka@metacare.app</Text>
    </Container>
  );
};

const Container = tw.div`
    flex
    flex-col
    justify-center
    rounded-sm
    border
    border-border
    py-12
    mx-4
    my-3
    mt-[21px]
    p-auto
    pl-[57px]
`;
const Heading = tw.h3`
    font-[500]
    text-sm
    text-textPrimary
`;

const Text = tw.p`
    text-default
    text-textSecondary
`;
