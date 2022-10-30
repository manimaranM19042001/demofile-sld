import React, { FC } from "react";
import '../../src/styles/partition_board.css'
import { IBoardProps } from "../enums_types_and_interfaces/interface";

const Board: FC<IBoardProps[]> = (props) => {

    return (
        <>
            <div className="cell-grid" >
                <div className="icon-placeholder">👽</div>
                <div className="cell-number">1</div>
                <div className="snake-ladder-icon">🐍</div>
                <div className="to-place-value">20</div>
            </div>
        </>
    );
}

export default Board