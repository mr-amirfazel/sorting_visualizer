import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import * as types from '../../store/types';

import styles from './Navbar.module.css';

const Navbar = () =>{

    const dispatch = useDispatch();
    const isSorting = useSelector((state) => state.isSorting);

    const clickHandler = (e) =>{
        e.preventDefault();
        dispatch({ type: types.ALTERSORT, sort: e.target.name });
    }

    return (
    <nav className={styles.navbar}>
         <div  className={styles.nav_line}>
            <Link  to="/" className={isSorting ? styles.disable_link : ''}><h2>Visualizer</h2></Link>

            <div>
            <button disabled={isSorting? true : false} type="button" name="bubbleSort" onClick={clickHandler} className="btn">Bubble Sort</button>
            <button disabled={isSorting? true : false} type="button" name="mergeSort" onClick={clickHandler} className="btn">Merge Sort</button>
            <button disabled={isSorting? true : false} type="button" name="insertionSort" onClick={clickHandler} className="btn">Insertion Sort</button>
            <button disabled={isSorting? true : false} type="button" name="selectionSort" onClick={clickHandler} className="btn">Selection Sort</button>
            </div>
        </div> 
    </nav>
    );
}

export default Navbar;