import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as types from '../../store/types';

import Slider from '../Slider/Slider';

import classes from './Sidebar.module.css';


const Sidebar = () => {

    const dispatch = useDispatch();
    const size = useSelector((state) => state.size);
    const sort = useSelector((state) => state.sort);
    const isSorting = useSelector((state) => state.isSorting);
  

    const changeHandler = (newSize) => {
        dispatch({ type: types.ALTERSIZE, size: newSize });
    }

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