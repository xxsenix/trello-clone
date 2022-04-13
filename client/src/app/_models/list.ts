import { Board } from "./board";
import { Card } from "./card";

export interface List {
    id?: number;
    title: string;
    board?: Board;
    cards?: Card[];
    board_id?: number;
}
