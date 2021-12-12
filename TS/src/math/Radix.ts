const decToBin: (n: number) => string = (n) => {
    let result = '';
    let newN: number = n;
    let mod: number;

    do {
        mod = newN % 2;
        newN = (newN - mod) / 2;

        result = String(mod) + result;
    } while (newN)

    return result;
}

export {
    decToBin
}