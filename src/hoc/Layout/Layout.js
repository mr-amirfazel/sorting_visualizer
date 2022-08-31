import classes from './Layout.module.css';

const Layout = () => {

    return(
        <div className={classes.container}>
            <div className={classes.sidebar}>Aha</div>
            <div className={classes.visualsContainer}></div>
        </div>
    );

}

export default Layout;