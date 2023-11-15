import React from "react";
import Link from "next/link";
import MainButton from "../../Buttons/MainButton";
import { StepInfo } from "../../StepInfo";
import { WhiteBlock } from "../../WhiteBlock";
import { MainContext } from "@/app/page";
import { GradientTemplate } from "../../Templates/GradientTemplate";

export const TwitterStep: React.FC = () => {
  const { onNextStep } = React.useContext(MainContext);
  return (
    <GradientTemplate>
      <WhiteBlock
        title="Import Info from Twitter"
        icon=""
        backgroundImage="twittercontainer.png"
        description="Do you want import info from Twitter?"
      >
        <div className="py-3">Narek Chakhoyan</div>
        <MainButton submitEvent={onNextStep}>Import From Twitter</MainButton>
        <div className="w-full p-4 text-right text-gray-500">
          <button
            onClick={onNextStep}
            className="inline-flex items-center focus:outline-none mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
              <circle cx="12" cy="12" r="8" />
            </svg>
            Enter my info manually
          </button>
        </div>
      </WhiteBlock>
    </GradientTemplate>
  );
};
