import React from 'react';
import { findMax, findNOD, quickSort } from '../utils/functions/functions';

export const Functions = () => {
    const array = [1,5,7,9,0,12,23,56,78,10];
    console.log(findMax(array));
    console.log(findNOD(1800, 640));
    console.log(quickSort(array));
    return <></>
};