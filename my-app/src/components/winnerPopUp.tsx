import React, { FC, useState } from "react";
import '../styles/winnerPopUp.css';

interface IWinnerPopUp {
    icon: string,
    name: string,
    setEnd: Function
}

export const WinnerPopUp: FC<IWinnerPopUp> = ({ icon, name, setEnd }) => {
    return (
        <>
            <div className="winner-square">
                <img src="https://gifimage.net/wp-content/uploads/2017/08/winner-gif-13.gif" alt="THE GAME FINISHED" />
                <h2>{icon}</h2>
                <h2>THE WINNER OF THE GAME IS : {name}</h2>
                <button className="ok" onClick={() => {
                    window.location.reload()
                    setEnd(false)
                }}>OK</button>
            </div>
        </>
    )
}