import {Link} from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () =>{
    return (
    <nav className={styles.navbar}>
         <div className={styles.nav_line}>
            <Link to="/"><h2>Visualizer</h2></Link>

            <div>
            <button type="button" className="btn">Bubble Sort</button>
            <button type="button" className="btn">Merge Sort</button>
            <button type="button" className="btn">Insertion Sort</button>
            <button type="button" className="btn">Selection Sort</button>
            </div>
        </div> 
    </nav>
    );
}

export default Navbar;