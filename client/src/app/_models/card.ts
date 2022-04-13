import { Comment } from "./comment";

export interface Card {
    id?: number;
    created_at?: Date;
    title: string;
    description: string;
    photoUrl?: string;
    comments?: Comment[];
    list_id?: number;
}