import React from 'react';
import { getDemoArray, getMapFromArray } from '../utils/constants';
import { searchMap } from '../utils/functions/binary-search';

export const BinarySearch = () => {
    // console.log('Binary', binarySearch({
    //   array: getDemoArray(42949676),
    //   searchTerm: 5786626
    // }));
    //
    // console.log('Linear', linearSearch({
    //   array: getDemoArray(42949676),
    //   searchTerm: 5786626
    // }));
    //
    // console.log('es6', es6Search({
    //   array: getDemoArray(42949676),
    //   searchTerm: 5786626
    // }));
    //
    // console.table(createPile(1000));
    //
    // console.log(Math.floor(Math.random() * 3))
    const map = getMapFromArray(getDemoArray(429496));

    // console.log(searchMappedArray({
    //     array: getDemoArray(429467),
    //     searchTerm: 578
    // }));

    console.log(searchMap({
        map,
        searchTerm: 5786
    }))

    // console.log(getMapFromArray(getDemoArray(1000)));
    return <></>
};