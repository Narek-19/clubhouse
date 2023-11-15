import React from "react";
import { MainContext } from "@/app/page";
import MainButton from "../../Buttons/MainButton";
import { WhiteBlock } from "../../WhiteBlock";
import { GradientTemplate } from "../../Templates/GradientTemplate";

export const WelcomeStep: React.FC = () => {
  const { onNextStep } = React.useContext(MainContext);
  return (
    <GradientTemplate>
      <WhiteBlock
        backgroundImage="./welcomeStep.png"
        icon=""
        title="Welcome to ClubHouse"
        description="Clubhouse is a social audio app for iOS and Android where users can communicate in audio chat rooms that accommodate groups of thousands of people."
      >
        <MainButton submitEvent={onNextStep}>Get your username</MainButton>
      </WhiteBlock>
    </GradientTemplate>
  );
};
