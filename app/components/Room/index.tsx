import React from "react";
import MainButton from "../Buttons/MainButton";

interface RoomProps {
    title:string;
}
export const Room: React.FC<RoomProps> = ({title}) => {
  return (
    <>
      <div className="flex justify-around">
        <div>{title}</div>
        <div>
          <MainButton>Leave</MainButton>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
};
