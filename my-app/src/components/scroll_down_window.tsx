import React, { FC } from "react";
import '../styles/scroll_down_window.css'
import {IScrollProps} from '../enums_types_and_interfaces/interface'

interface IProps{
    dataObject:IScrollProps;
    index:number;
}

const ScrollDownWindow = ({dataObject, index}:IProps) => {
    return (
        <div id='tag'>
        <div id='tag-move'>{index + 1}</div>
        <div id='tag-player'>{dataObject.icon}</div>
        <div id='tag-diceGot'>{dataObject.random}</div>
        <div id='tag-position'>{dataObject.position}</div>
      </div>
    );
}

export default ScrollDownWindow