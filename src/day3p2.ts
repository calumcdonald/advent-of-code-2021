import getLines from "./getLines.js";

const day3p2 = async (): Promise<number> => {
    return getLines('src/input/day3.txt').then((lines) => {
        let oxygenGeneratorRating: string[] = lines.slice();
        let CO2ScrubberRating: string[] = lines.slice();
        for(let i = 0; i < lines[0].length; i++){
            if(oxygenGeneratorRating.length > 1){
                let count0 = 0;
                let count1 = 0;

                for(let j = 0; j < oxygenGeneratorRating.length; j++){
                    if(oxygenGeneratorRating[j][i] === "0") count0++;
                    else count1++;
                }

                if (count0 > count1) {
                    oxygenGeneratorRating = oxygenGeneratorRating.filter((line) => line[i] === "0");
                } else {
                    oxygenGeneratorRating = oxygenGeneratorRating.filter((line) => line[i] === "1");
                }
            }

            if(CO2ScrubberRating.length > 1){
                let count0 = 0;
                let count1 = 0;
                for(let j = 0; j < CO2ScrubberRating.length; j++){
                    if(CO2ScrubberRating[j][i] === "0") count0++;
                    else count1++;
                }

                if (count0 > count1) {
                    CO2ScrubberRating = CO2ScrubberRating.filter((line) => line[i] === "1");
                } else {
                    CO2ScrubberRating = CO2ScrubberRating.filter((line) => line[i] === "0");
                }
            }
        }

        return parseInt(oxygenGeneratorRating[0], 2) * parseInt(CO2ScrubberRating[0], 2);
    });
}

export default day3p2;