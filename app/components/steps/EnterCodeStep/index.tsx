import { useRouter } from "next/navigation";
import MainButton from "../../Buttons/MainButton";
import { StepInfo } from "../../StepInfo";
import { WhiteBlock } from "../../WhiteBlock";
import { GradientTemplate } from "../../Templates/GradientTemplate";

export const EnterCodeStep: React.FC = () => {
  const navigate = useRouter();
  // 2-1:26:11
  const onSubmit = () => {
    navigate.push("/rooms");
  };

  return (
    <GradientTemplate>
      <WhiteBlock
        icon=""
        title="Enter SMS code"
        description="Enter your activate Code"
        backgroundImage="./phonecode.png"
      >
        <div className="py-3">
          <label className="text-sm text-gray-600">Activation Code</label>
          <div className="w-full inline-flex border">
            <div className="pt-2 w-1/12 bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="black"
                viewBox="0 0 24 24"
              >
                <text
                  x="50%"
                  y="50%"
                  dy=".3em"
                  text-anchor="middle"
                  font-size="16"
                  font-weight="bold"
                >
                  12
                </text>
              </svg>
            </div>
            <input
              type="number"
              className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              placeholder="1234"
            />
          </div>
        </div>
        <MainButton submitEvent={onSubmit}>Next</MainButton>
      </WhiteBlock>
    </GradientTemplate>
  );
};
