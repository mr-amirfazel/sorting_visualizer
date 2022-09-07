import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as types from '../../store/types';
import * as sorts from '../../Sorts/sorts';

import BubbleSort from '../../Sorts/BubbleSort';
import InsertionSort from '../../Sorts/InsertionSort';
import SelectionSort from '../../Sorts/SelectionSort';

import Slider from '../Slider/Slider';

import classes from './Sidebar.module.css';


const Sidebar = () => {

    const dispatch = useDispatch();
    const size = useSelector((state) => state.size);
    const sort = useSelector((state) => state.sort);
    const isSorting = useSelector((state) => state.isSorting);
    const array = useSelector((state) => state.array);
    const setArray = useSelector((state) => state.setArray);

    const arraySwaped = (newArr) =>{
        setArray(newArr);
        dispatch({ type: types.ALTERSORTREQUIRED, array: newArr, setArray:setArray });
    }
  

    const changeHandler = (newSize) => {
        dispatch({ type: types.ALTERSIZE, size: newSize });
    }

    useEffect(() => {
        if (array !== undefined) {
            const sorted = [...array];
            
        if(array.join(',') === sorted.sort((a,b)=> a-b).join(',')){
            dispatch({ type: types.ALTERISSORTING, isSorting:false})
        }
        }
    }, [array])



    const sortHandler = () => {
            if (sort === undefined) {
                alert('Please specify the sort type');
            }
            if (isSorting) {
                alert('the array is being sorted')
            }
            if(sort !== undefined) 
            {
                dispatch({type: types.ALTERISSORTING, isSorting: true});
               switch (sort) {
                case sorts.BubbleSort:
                    BubbleSort(array, arraySwaped);
                    break;

                case sorts.InsertionSort:
                    InsertionSort(array, arraySwaped);
                    break;
                case sorts.SelectionSort:
                    SelectionSort(array, arraySwaped);
                    break;
               }
                
            }

    }


    return (
        <div className={classes.sidebar}>
            
           <div className={classes.slider}>
           <Slider disabled={isSorting? true: false} onChange = {changeHandler} />
           <p>Array size({size})</p>
           </div>

            <button className="btn  w-100" onClick={sortHandler}>Sort</button>
            
        </div>
    );

}

export default  Sidebar;