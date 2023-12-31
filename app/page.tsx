"use client";
import React, { FC } from "react";
import { WelcomeStep } from "./components/steps/WelcomeStep";
import { EnterNameStep } from "./components/steps/EnterNameStep";
import { TwitterStep } from "./components/steps/TwitterStep";
import { ChooseAvatarStep } from "./components/steps/ChooseAvatarStep";
import { EnterPhoneStep } from "./components/steps/EnterPhoneStep";
import { EnterCodeStep } from "./components/steps/EnterCodeStep";

interface Components {
  [key: number]: FC<{}>;
}


type MainContextProps = {
  onNextStep: () => void;
  step: number;
};


export const MainContext = React.createContext<MainContextProps>(
  {} as MainContextProps
);


const componentSteps: Components = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: TwitterStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

export default function Home() {
  const [step, setStep] = React.useState<number>(0);


  
  const Step = componentSteps[step];

  const onNextStep =()=>{
    setStep((prev) => prev + 1);
  }

  return (
    <main>
      <MainContext.Provider value={{ step, onNextStep }}>
        <Step />
      </MainContext.Provider>
    </main>
  );
}
