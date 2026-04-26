export type Game = {
    id: number;
    date: string;
    opponent: string;
    home: boolean;
    broadcast: string;

    status: string;
    homeScore: number;
    awayScore: number;
};