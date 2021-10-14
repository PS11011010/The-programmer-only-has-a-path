const Sum: (arr: number[]) => number = (arr) => {
    return arr.reduce((result, current) => {
        return result + current;
    }, 0)
}

export {
    Sum
}