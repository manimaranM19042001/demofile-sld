import React, { FC, useState } from "react";
import '../styles/alertComponent.css';

interface IAlertWIndow {
    setInputForm: Function,
    text?: string,
    setShow:Function,
    show:boolean,
}

export const AlertWindow: FC<IAlertWIndow> = ({ setInputForm, text,setShow,show }) => {

    function handleClick(){
        setShow(!show)
        setInputForm(true)
    }
    return (
        <>
            {show && (
                <div className="main" >
                    <div className="square" >
                        <div className="circle" onClick={handleClick}>X</div>
                        {text}
                    </div>
                </div>
            )}
        </>
    )
}