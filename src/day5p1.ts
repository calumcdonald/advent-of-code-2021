import getLines from "./getLines.js";

let board: number[][] = [];
let overlaps = 0;

export interface CoordinatePair {
    pointA: number[];
    pointB: number[];
}

const markLine = (pair: CoordinatePair) => {
    console.log("~~~");
    if(pair.pointA[0] === pair.pointB[0]){
        console.log("vertical");
        console.log("A " + pair.pointA);
        console.log("B " + pair.pointB);
        const diff = Math.abs(pair.pointA[1] - pair.pointB[1]);
        console.log(pair.pointA[1]);
        console.log(pair.pointB[1]);
        console.log(diff);
        const startIndex = (pair.pointA[1] < pair.pointB[1] ? pair.pointA[1] : pair.pointB[1]);
        for(let y = startIndex; y <= startIndex + diff; y++){
            if(board[y][pair.pointA[0]] === 0){
                board[y][pair.pointA[0]] = 1;
            } else {
                const value: number = board[y][pair.pointA[0]] + 1;
                board[y][pair.pointA[0]] = value;
                if(value > 1) overlaps++;
            }
        }
    } else if(pair.pointA[1] === pair.pointB[1]){
        console.log("horizontal");
        console.log("A " + pair.pointA);
        console.log("B " + pair.pointB);
        const diff = Math.abs(pair.pointA[0] - pair.pointB[0]);
        console.log(pair.pointA[0]);
        console.log(pair.pointB[0]);
        console.log(diff);
        const startIndex = (pair.pointA[0] < pair.pointB[0] ? pair.pointA[0] : pair.pointB[0]);
        for(let x = startIndex; x <= startIndex + diff; x++){
            if(board[pair.pointA[1]][x] === 0){
                board[pair.pointA[1]][x] = 1;
            } else {
                const value: number = board[pair.pointA[1]][x] + 1;
                board[pair.pointA[1]][x] = value;
                if(value > 1) overlaps++;
            }
        }
    }
};

const day5p1 = async (): Promise<number> => {
    return getLines('src/input/day5.txt').then((lines) => {
        for(let x = 0; x < 1000; x++){
            board[x] = [];
            for(let y = 0; y < 1000; y++){
                board[x][y] = 0;
            }
        }

        for(let i = 0; i < lines.length; i++){
            const points = lines[i].split(" -> ");
            const pair: CoordinatePair = {
                pointA: points[0].split(",").map(Number),
                pointB: points[1].split(",").map(Number)
            }

            if(pair.pointA[0] === pair.pointB[0] || pair.pointA[1] === pair.pointB[1]){
                markLine(pair);
            }
        }

        return overlaps;
    });
}

export default day5p1;