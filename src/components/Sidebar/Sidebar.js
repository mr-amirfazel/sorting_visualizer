import React, {useState} from 'react';

import Slider from '../Slider/Slider';

import classes from './Sidebar.module.css';


const Sidebar = () => {
    const [size, setSize] = useState(40);

    const changeHandler = (newSize) => {
        setSize(newSize);
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