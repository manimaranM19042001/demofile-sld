import React, { FC, useState } from "react";
import '../styles/alertComponent.css';
import audio from "../resources/audio/A.mp3"

interface IAlertWIndow {
    myfunc: Function,
}

export const AlertWindow: FC<IAlertWIndow> = ({ myfunc }) => {
    const [showHide, setShoeHide] = useState<boolean>(true)

    function call(){
        new Audio(audio).play()
        myfunc(false)
    }


    return (
        <>
            <div className="main" >
                <div className="square" >
                    <div className="circle" onClick={call}>X</div>
                    Only four players can play !!!
                </div>
            </div>
        </>
    )
}