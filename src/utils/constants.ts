export const getDemoArray = (n: number) => Array.from(Array(n + 1).keys());
export const unsortedArray = [0, 5, 7, -2, 1, 0, 19, 23, 11, -5, -2, 1, 8, 5, -4, -22, 12, 4, 9, 7, 3, -1, -8, 25];

export const list = Array(100000).fill(0).map((_, n) => [n, n]);

export const getMapFromArray = (array: (string | number)[]) => {
    return new Map(array.map((elem) => [elem, elem]))
}
