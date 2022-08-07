
interface ICar{
    id: number;
    name: string;
    color: string;
};
interface IEngine{
    velocity: number;
    distance: number;
}
interface IWinner{
    page?: string,
    limit?: string
}
type TCars = Array<ICar>

interface IState{
        cars: TCars,
        currentCarId: number,
        currentPage: number,
        currentPageCars: TCars,
        maxCars: number,
        winners: TCars,
        velocity: number,
        XTotalCount: number
    };


export type {ICar, IEngine, IWinner, TCars, IState}