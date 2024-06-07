export interface Card {
    id: number;
    title: string;
    url: string;
    info: string;
    items: string[];

}

export interface CardProps {
    cards: Card[];
}
