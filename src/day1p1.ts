import getLines from "./getLines.js";

const day1p1 = async (): Promise<number> => {
    return getLines('src/input/day1.txt').then((lines) => {
        let count = 0;
        for(let i = 1; i < lines.length; i++){
            if(Number(lines[i]) > Number(lines[i-1])) count++;
        }
        return count;
    });
}

export default day1p1;