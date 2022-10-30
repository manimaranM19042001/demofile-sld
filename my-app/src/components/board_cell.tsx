import React, { FC } from "react";
import { IBoarCellProps} from "../enums_types_and_interfaces/interface";

const Cell: FC<IBoarCellProps> = ({ dataObject, index }) => {
    return (
        <>
            <div className="cell-grid" key={index}>
                <div className="icon-placeholder">{dataObject.players.join('').toString()}</div>
                <div className="cell-number">{dataObject.number}</div>
                <div className="snake-ladder-icon">{dataObject.image}</div>
                <div className="to-place-value">{dataObject.to}</div>
            </div>
        </>
    );
}

export default Cell