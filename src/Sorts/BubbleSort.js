import React from 'react';
import {useDispatch} from 'react-redux';

import * as types from '../store/types';
// const dispatch = useDispatch();

const BubbleSort = (arr, setArr) => {
    let isSorted = false;
    
   

    setTimeout(() => {
        let newArr = [...arr];
        for (let i = 0; i < arr.length - 1; i++) {
          setTimeout(() => {
            for (let j = i + 1; j < arr.length; j++) {
              if (newArr[i] > newArr[j]) {
                let temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
                let newStep = [...newArr];
                setTimeout(() => {
                  setArr([...newStep]);
                  console.log(newStep);
                }, j * 100);
              }
              
            }
          }, i * 1000);
        }
      }, 500);
}

export default BubbleSort;