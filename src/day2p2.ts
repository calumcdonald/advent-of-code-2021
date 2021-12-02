import getLines from "./getLines.js";

const day2p2 = async (): Promise<number> => {
    return getLines('src/input/day2.txt').then((lines) => {
        let horizonalPosition = 0;
        let depth = 0;
        let aim = 0;
        for(let i = 0; i < lines.length; i++){
            const lineValues = lines[i].split(" ");
            const command = lineValues[0];
            const value = Number(lineValues[1]);

            if(command === "forward"){ 
                horizonalPosition += Number(value);
                depth += (aim * value);
            }
            else if(command === "up") aim -= value;
            else if(command === "down") aim += value;
        }

        return horizonalPosition * depth;
    });
}

export default day2p2;