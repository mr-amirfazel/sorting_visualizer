import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Bar from '../Bar/Bar';
import * as types from '../../store/types';

import classes from './SoringField.module.css';


const SortingField = () => {

    const [arr,setArr] = useState([]);

    const size = useSelector(state => state.size);
    const dispatch = useDispatch();

    const createArray = () => {
        let newArr = [];
      while (newArr.length < size) {
        let random = Math.floor(Math.random() * (300) + 10);
        if (newArr.indexOf(random) === -1) {
          newArr.push(random);
        }
      }
      return newArr;
  };
    

    useEffect(() => {
        let arr = createArray();
        console.log(arr);
        // arr = arr.map(item =>{
        //   return({
        //     value: item,
        //     selected:false,
        //   });
        // })
        setArr(arr);
        dispatch({ type: types.ALTERSORTREQUIRED, setArray:setArr, array:arr });
      }, [size]);



    return(
        <div className={`${classes.SortingField} mx-auto my-auto`}>
            <div className={classes.bars}>
                {arr.map(item => {
                    return (
                       <Bar key={`key-${item}`} value={item}  size={size} />
                    );
                })}
            </div>
        </div>
    );
}

export default SortingField;