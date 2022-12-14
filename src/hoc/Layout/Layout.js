import Sidebar from '../../components/Sidebar/Sidebar';
import SortingField from '../../components/SortingField/SortingField';


import classes from './Layout.module.css';

const Layout = () => {

    return(
        <div className={classes.container}>
            <div className={classes.sidebar}><Sidebar /></div>
            <div className={classes.visualsContainer}><SortingField /></div>
        </div>
    );

}

export default Layout;