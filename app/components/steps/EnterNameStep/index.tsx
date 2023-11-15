import React from "react";
import { MainContext } from "@/app/page";
import MainButton from "../../Buttons/MainButton";
import { StepInfo } from "../../StepInfo";
import { WhiteBlock } from "../../WhiteBlock";
import { GradientTemplate } from "../../Templates/GradientTemplate";

export const EnterNameStep: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const { onNextStep } = React.useContext(MainContext);

  const nextDisabled = !inputValue;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const onClickNextStep = () => {};

  return (
    <GradientTemplate>
      <WhiteBlock
        backgroundImage="./nameimage.png"
        icon=""
        title="What is your full name"
        description="People use real names on Clubhouse."
      >
        <div className="py-3">
          <label className="text-sm text-gray-600">Full name</label>
          <div className="w-full inline-flex border">
            <div className="w-1/12 pt-2 bg-gray-100">
              <svg
                fill="none"
                className="w-6 text-gray-400 mx-auto"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <input
              value={inputValue}
              type="text"
              onChange={handleChangeInput}
              className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              placeholder="Charly Olivas"
            />
          </div>
        </div>
        <MainButton disabled={nextDisabled} submitEvent={onNextStep}>
          Next
        </MainButton>
      </WhiteBlock>
    </GradientTemplate>
  );
};
