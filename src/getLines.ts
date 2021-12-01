import fs from "fs";
import readline from "readline";

const getLines = async (path: string): Promise<string[]> => {
    const fileStream = fs.createReadStream(path);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const lines: string[] = [];

    for await(const line of rl){
        lines.push(line);
    }

    return lines;
}

export default getLines;