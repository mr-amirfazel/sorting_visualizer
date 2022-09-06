import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Bar from '../Bar/Bar';

import classes from './SoringField.module.css';


const SortingField = () => {

    const [arr,setArr] = useState([]);

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
        setArr(arr);
      }, [size]);



    return(
        <div className={`${classes.SortingField} mx-auto my-auto`}>
            <div className={classes.bars}>
                {arr.map(item => {
                    return (
                       <Bar value={item} size={size} />
                    );
                })}
            </div>
        </div>
    );
}

export default SortingField;