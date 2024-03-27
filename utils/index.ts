/** @format */

export const formattedNum = (num: {
    toLocaleString: (arg0: string, arg1: {minimumFractionDigits: number; maximumFractionDigits: number}) => any;
}) => {
    return num.toLocaleString("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};

export const objectToQueryString = (obj: {[x: string]: any}) => {
    return Object.keys(obj)
        .map((key) => `${key}=${obj[key]}`)
        .join("&");
};

export const getRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
};

export const schedule = (arr: any[], maxNum: number) => {
    let result = new Array(arr.length).fill(false);
    let sum = arr.length; //总数
    let count = 0; //已完成数
    return new Promise((resolve, reject) => {
        while (count < maxNum) {
            next();
        }
        function next() {
            let current = count++;
            if (current >= sum) {
                !result.includes(false) && resolve(result);
                return;
            }
            let item = arr[current];
            item()
                .then((res: any) => {
                    result[current] = res;
                    if (current < sum) {
                        next();
                    }
                })
                .catch((err: any) => {
                    result[current] = err;
                    if (current < sum) {
                        next();
                    }
                });
        }
    });
};
