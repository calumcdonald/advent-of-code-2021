import getLines from "./getLines.js";

const day1p2 = async (): Promise<number> => {
    return getLines('src/input/day1.txt').then((lines) => {
        let count = 0;
        let depths: number[] = [];
        for(let i = 0; i < lines.length; i++){
            depths.push(Number(lines[i]) + Number(lines[i+1]) + Number(lines[i+2]));
        }

        for(let i = 1; i < depths.length; i++){
            if(depths[i] > depths[i-1]) count++;
        }
        return count;
    });
}

export default day1p2;