import React from "react";
import MainButton from "../../Buttons/MainButton";
import { StepInfo } from "../../StepInfo";
import { WhiteBlock } from "../../WhiteBlock";
import { Avatar } from "../../Avatar";
import { MainContext } from "@/app/page";
import { GradientTemplate } from "../../Templates/GradientTemplate";

export const ChooseAvatarStep: React.FC = () => {
  const { onNextStep } = React.useContext(MainContext);
  const [avatarUrl, setAvatarUrl] = React.useState<string>(
    "https://www.w3schools.com/w3images/avatar2.png"
  );
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const handleChangeImage = (event: Event): void => {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };

  React.useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener<any>("change", handleChangeImage);
    }
  }, []);

  return (
    <GradientTemplate>
      <WhiteBlock
        icon=""
        title="Avatar Photo"
        description="Choose Avatar Photo"
        backgroundImage="./avatarsection.png"
      >
        <Avatar src={avatarUrl} width="120px" height="120px" />

        {/* 2 - 47:06  */}
        <div className="pb-3">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="image"
            ref={inputFileRef}
            type="file"
            hidden
          />
        </div>

        <MainButton submitEvent={onNextStep}>Next</MainButton>
      </WhiteBlock>
    </GradientTemplate>
  );
};
