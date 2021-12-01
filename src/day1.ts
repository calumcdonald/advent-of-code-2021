import fs from "fs";
import readline from "readline";

const day1 = async (): Promise<number> => {
    const fileStream = fs.createReadStream('src/input/day1.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await(const line of rl){
        console.log(line);
    }

    return 0;
}

export default day1;