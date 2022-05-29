import React from 'react';
import { unsortedArray } from '../utils/constants';

export const SortingAlgorithms = () => {
    const selectionSort = (array: number[]) => {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            let minIndex = i;
            // look up the next num
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
                count++;
            }
            const tmp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = tmp;
        }
        return { array, iterations: count };
    }

    const bubbleSorting = (array: number[]) => {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[j + 1] < array[j]) {
                    let tmp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = tmp;
                }
                count++;
            }
        }
        return { array, iterations: count };
    }
    // console.log(bubbleSorting(unsortedArray));

    const factorial = (n: number): number => {
        if (n === 1) return 1;
        return n * factorial(n - 1);
    }

    console.log(factorial(5));

    return <></>;
};