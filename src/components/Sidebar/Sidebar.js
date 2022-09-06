import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as types from '../../store/types';

import Slider from '../Slider/Slider';

import classes from './Sidebar.module.css';


const Sidebar = () => {

    const dispatch = useDispatch();
    const size = useSelector((state) => state.size);
  

    const changeHandler = (newSize) => {
        dispatch({ type: types.ALTERSIZE, size: newSize });
    }


    return (
        <div className={classes.sidebar}>
            
           <div className={classes.slider}>
           <Slider onChange = {changeHandler} />
           <p>Array size({size})</p>
           </div>

            <button className="btn  w-100">Sort</button>
            
        </div>
    );

}

export default  Sidebar;