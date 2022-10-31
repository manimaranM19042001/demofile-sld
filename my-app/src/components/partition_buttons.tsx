import React, { FC } from "react";

interface IButtonProps {
  currentplayer: string;
  randomNumber: number;
  functio: Function;
}

const Buttons: FC<IButtonProps> = ({ currentplayer, randomNumber }) => {
  return (
    <>
      <div className="top-right" id="dice-image" ><div id="imageOfGame" ></div></div>
      <div className="top-right" id="show-name">{currentplayer}</div>
      <div className="top-right" id="points-board" >{randomNumber}</div>
      <div className="top-right" id="refresh-button" onClick={
        () => {
          window.location.reload()
        }}>RESET</div>
    </>
  );
}

export default Buttons