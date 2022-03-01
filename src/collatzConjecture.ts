{
    class Collatz {
        static validateNumber = (num: number) => {
            if (typeof num !== "number" || Number.isNaN(num))
                throw new Error("The argument isn't a number");
        
            if (num < 1)
                throw new Error("The number must be greater than or equal 1");
        
            return Math.round(num);
        }

        static getNextNumberFrom = (num: number) => {
            num = this.validateNumber(num);
            
            return num % 2 === 0
                ? num / 2
                : num * 3 + 1;
        }

        static getSequenceFrom = (num: number) => {
            num = this.validateNumber(num);

            let sequence = [];
            sequence.push(num);

            while (num > 1) {
                num = this.getNextNumberFrom(num);
                sequence.push(num);
            }
            
            return sequence;
        }
        
        static getHighestFrom = (num: number) => {
            num = this.validateNumber(num);
            
            let highest = num;

            while (num > 1) {
                num = this.getNextNumberFrom(num);
                if (num > highest)
                    highest = num;
            }

            return highest;
        }
        
        static getIterationsFrom = (num: number) => {
            num = this.validateNumber(num);

            let i = 0;
        
            while (num > 1) {
                num = this.getNextNumberFrom(num);
                i++;
            }
            
            return i;
        }

        constructor() {
            throw new TypeError("Collatz is not a constructor");
        }
    }
}