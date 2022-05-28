export const getDemoArray = (n: number) => Array.from(Array(n + 1).keys());

export const list = Array(100000).fill(0).map((_, n) => [n, n]);

export const getMapFromArray = (array: (string | number)[]) => {
    return new Map(array.map((elem) => [elem, elem]))
}
