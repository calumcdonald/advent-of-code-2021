import getLines from "./getLines.js";

export interface ISpace {
    value: string;
    called: boolean;  
};

const day4p1 = async (): Promise<number> => {
    return getLines('src/input/day4.txt').then((lines) => {
        const calls: string[] = lines[0].split(',');
        const boards: string[][][] = [];

        let board: string[][] = [];
        for(let i = 2; i < lines.length; i++){
            if(lines[i] == ""){
                boards.push(board);
                board = [];
            } else {
                board.push(lines[i].split(" ").filter((value) => value !== ""));
            }
        }

        // Last board
        boards.push(board);

        let finalCall = 0;
        let winningSum = [];
        for(let i = 0; i < calls.length; i++){
            const call = calls[i];

            for(let j = 0; j < boards.length; j++){
                for(let k = 0; k < boards[j].length; k++){
                    for(let l = 0; l < boards[j][k].length; l++){
                        if(boards[j][k][l] === call){
                            if(!boards[j][k][l].includes("c")) boards[j][k][l]+="c";
                        }
                    }
                }

                for(let k = 0; k < boards[j].length; k++){
                    winningSum = [];
                    if(boards[j][0][k].includes("c") && boards[j][1][k].includes("c") && boards[j][2][k].includes("c") && boards[j][3][k].includes("c") && boards[j][4][k].includes("c")){
                        finalCall = Number(calls[i]);
                        winningSum.push(Number(boards[j][k][0].replace("c", "")));
                        winningSum.push(Number(boards[j][k][1].replace("c", "")));
                        winningSum.push(Number(boards[j][k][2].replace("c", "")));
                        winningSum.push(Number(boards[j][k][3].replace("c", "")));
                        winningSum.push(Number(boards[j][k][4].replace("c", "")));
                        //console.log(boards[j]);
                        break;
                    }

                    if(boards[j][k][0].includes("c") && boards[j][k][1].includes("c") && boards[j][k][2].includes("c") && boards[j][k][3].includes("c") && boards[j][k][4].includes("c")){
                        finalCall = Number(calls[i]);
                        winningSum.push(Number(boards[j][k][0].replace("c", "")));
                        winningSum.push(Number(boards[j][k][1].replace("c", "")));
                        winningSum.push(Number(boards[j][k][2].replace("c", "")));
                        winningSum.push(Number(boards[j][k][3].replace("c", "")));
                        winningSum.push(Number(boards[j][k][4].replace("c", "")));
                        //console.log(boards[j]);
                        break;
                    }
                }
            }
        }

        console.log(finalCall);
        console.log(winningSum);
        return finalCall * (winningSum[0]+winningSum[1]+winningSum[2]+winningSum[3]+winningSum[4]);
    });
}

export default day4p1;