import { List } from "./list";

export interface Board {
    id?: number;
    title: string;
    description: string;
    isPrivate: boolean;
    lists?: List[];
}
