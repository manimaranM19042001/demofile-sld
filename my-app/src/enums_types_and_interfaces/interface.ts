export interface ISnakesAndLadders {
    id: number;
    to: number;
}

export interface ICellData {
    id: number;
    number: number | string;
    players: string[];
    image: string;
    from: number;
    to: number | string;
}
export interface IBoarCellProps {
    dataObject: ICellData;
    index: number;
}
export interface IScrollProps {
    icon: string;
    random: number;
    position: number;
}

export interface IHistory {
    icon: string,
    random: number,
    position: number,
}

export interface IPlayerData {
    name: string,
    icon: string,
    position: number,
}

export interface IBoardProps {
    id: number;
    number: number | string;
    players: string[];
    image: string;
    from: number;
    to: number | string;
}