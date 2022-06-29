// recursive array max
export const findMax = (arr: number[]): number => {
    if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            return arr[0];
        } else {
            return arr[1];
        }
    }
    const sub_max = findMax(arr.slice(1));
    if (arr[0] > sub_max) {
        return arr[0];
    } else {
        return sub_max;
    }
}

// алгоритм Евклида по нахождению НОД (Наибольшего Общего Делителя)
export const findNOD = (x: number, y: number): number => {
    return x !== 0 ? findNOD(y % x, x) : y;
}

// Алгоритм быстрой сортировки массива
export const quickSort = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr;
    }
    // выбор случайного элемента меняет сложность алгоритма с O(n ** 2) на O(n * log n)
    const pivotElem = arr[Math.floor(Math.random() * arr.length)];
    const less = arr.filter((elem) => elem < pivotElem);
    const greater = arr.filter((elem) => elem > pivotElem);
    return [...quickSort(less), pivotElem, ...quickSort(greater)];
}