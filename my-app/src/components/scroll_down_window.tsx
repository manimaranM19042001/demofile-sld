import React, { FC } from "react";
import '../styles/scroll_down_window.css'
import { IScrollProps } from '../enums_types_and_interfaces/interface'

interface IProps {
    dataObject: IScrollProps;
    index: number;
    inOrDec: string | undefined
}

const ScrollDownWindow = ({ dataObject, index, inOrDec }: IProps) => {
    return (
        <div id='tag' style={{backgroundColor: inOrDec === "⏳" ? '#6577B3' : (inOrDec === "⬆" ? '#5cff5cce' : '#fc5050d2') }}>
            <div id='tag-move'>{index + 1}</div>
            <div id='tag-player'>{dataObject.icon}</div>
            <div id='tag-diceGot'>{dataObject.random}</div>
            <div id='tag-position'>{dataObject.position}</div>
            <div>{inOrDec}</div>
        </div>
    );
}

export default ScrollDownWindow