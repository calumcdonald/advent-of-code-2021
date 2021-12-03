import getLines from "./getLines.js";

const day3p1 = async (): Promise<number> => {
    return getLines('src/input/day3.txt').then((lines) => {
        let gammaRate: string = "";
        let epsilonRate: string = "";
        for(let i = 0; i < lines[0].length; i++){
            let count0 = 0;
            let count1 = 0;
            for(let j = 0; j < lines.length; j++){
                if(lines[j][i] === "0") count0++;
                else count1++;
            }

            if(count0 > count1){
                gammaRate+="0";
            } else {
                gammaRate+="1";
            }
        };

        epsilonRate = gammaRate.replace(/[0-1]/g, (v) => (v === '1' ? '0' : '1'));
        
        return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
    });
}

export default day3p1;