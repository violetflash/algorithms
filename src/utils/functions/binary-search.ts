import { DateTime } from "luxon"
import { getMapFromArray } from '../constants';

interface SearchProps {
    array: (number | string)[];
    searchTerm: string | number;
}

interface MapSearchProps {
    map: Map<string | number, string | number>;
    searchTerm: string | number;
}

export const es6Search = ({ array, searchTerm }: SearchProps) => {
    const start = DateTime.now();
    const item = array.find((elem) => elem === searchTerm);
    if (item) {
        const end = DateTime.now();
        return { item, milliseconds: end.diff(start, ['milliseconds']).toFormat('S') }
    }
}

export const linearSearch = ({ array, searchTerm }: SearchProps) => {
    const start = DateTime.now();
    let guess = 0;
    while (array[guess] !== searchTerm) {
        guess++;
        if (array[guess] === searchTerm) {
            const end = DateTime.now();
            return { guess, milliseconds: end.diff(start, ['milliseconds']).toFormat('S') }
        }
    }
}

export const binarySearch = ({ array, searchTerm }: SearchProps) => {
    const start = DateTime.now();
    let guessCount = 0;
    let min = 0;
    let max = array.length - 1;


    guessCount++;
    while (min <= max) {
        let mid = Math.floor((max + min) / 2);
        const guess = array[mid];
        guessCount++;
        if (guess === searchTerm) {
            const end = DateTime.now();
            // return { index: mid, guessCount, milliseconds: start.diffNow('millisecond') }
            return { index: mid, guessCount, milliseconds: end.diff(start, ['milliseconds']).toFormat('S') }
        }
        if (guess > searchTerm) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
}

export const createPile = (n: number) => {
    let start = 0;
    const pile = [start];
    while (pile.length < n) {
        start += 1 + Math.floor(Math.random() * 6);
        pile.push(start);
    }
    return pile;
};

export const searchMappedArray = ({ array, searchTerm }: SearchProps) => {
    const start = DateTime.now();
    const item = getMapFromArray(array).get(searchTerm);
    if (item) {
        const end = DateTime.now();
        return { item, milliseconds: end.diff(start, ['milliseconds']).toFormat('S') }
    }
}

export const searchMap = ({ map, searchTerm }: MapSearchProps) => {
    const start = DateTime.now();
    const item = map.get(searchTerm);
    if (item) {
        const end = DateTime.now();
        return { item, milliseconds: end.diff(start, ['milliseconds']).toFormat('S') }
    }
}