import { Card } from "./card";
import { User } from "./user";

export interface Comment {
    id?: number;
    created_at?: Date;
    body: string;
    author?: User;
    card?: Card;
    card_id?: number;
}