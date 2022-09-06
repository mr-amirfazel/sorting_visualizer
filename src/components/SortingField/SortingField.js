import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import classes from './SoringField.module.css';


const SortingField = () => {

    const size = useSelector(state => state.size);

    const createArray = () => {
        let newArr = [];
      while (newArr.length < size) {
        let random = Math.floor(Math.random() * (200 - 10) + 10);
        if (newArr.indexOf(random) === -1) {
          newArr.push(random);
        }
      }
      return newArr;
  };
    

    useEffect(() => {
        const arr = createArray();
        console.log(arr);
      }, [size]);



    return(
        <div className={`${classes.SortingField} mx-auto my-auto`}>
            <div className={classes.bars}>hi</div>
        </div>
    );
}

export default SortingField;