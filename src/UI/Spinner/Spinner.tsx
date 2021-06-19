import React from 'react';
import classes from './Spinner.module.css';




const Leaflets: React.FC = () => {
    return (
        <div className={[classes.loader, classes.book].join(' ')}>
            <figure className={classes.page}></figure>
            <figure className={classes.page}></figure>
            <figure className={classes.page}></figure>
        </div>
    );
};

export default Leaflets;