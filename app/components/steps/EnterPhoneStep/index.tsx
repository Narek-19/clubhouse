import React from "react";
import { MainContext } from "@/app/page";
import MainButton from "../../Buttons/MainButton";
import { StepInfo } from "../../StepInfo";
import { WhiteBlock } from "../../WhiteBlock";
import { GradientTemplate } from "../../Templates/GradientTemplate";

export const EnterPhoneStep: React.FC = () => {
  const { onNextStep } = React.useContext(MainContext);
  return (
    <GradientTemplate>
      <WhiteBlock
        icon=""
        title="Enter your phone"
        description="We will send you a confirmation code"
        backgroundImage="./phonenumber.png"
      >
        <div className="py-3">
          <label className="text-sm text-gray-600">Phone number</label>
          <div className="w-full inline-flex border">
            <div className="pt-2 w-1/12 bg-gray-100">
              <svg
                fill="none"
                className="w-6 text-gray-600 mx-auto"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              type="number"
              className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              placeholder="12341234"
            />
          </div>
        </div>
        <MainButton submitEvent={onNextStep}>Next</MainButton>
        <p>
          By entering your number, you are agreeing to our Terms of Service and
          Policy. Thanks!
        </p>
      </WhiteBlock>
    </GradientTemplate>
  );
};
