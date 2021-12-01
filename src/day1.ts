import fs from "fs";
import readline from "readline";

const day1 = async (): Promise<number> => {
    const fileStream = fs.createReadStream('src/input/day1.txt');

    let lineCount = 0;
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    
    let increasedCount = 0;
    let lastDepth: number = 0;
    let currentDepth: number = 0;

    for await(const line of rl){
        if(lineCount === 0) lastDepth = Number(line); 
        
        currentDepth = Number(line);

        if(currentDepth > lastDepth){
            increasedCount++;
        }

        lastDepth = currentDepth;

        lineCount++;
    }

    return increasedCount;
}

export default day1;