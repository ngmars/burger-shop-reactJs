import React from 'react';
import Aux from '../../hoc/Aux.js';
import classes from './Layout.css';


const layout =(props)=>(
    <Aux>
    <div>
        toolbar,sidebar,background
    </div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux>
);

export default layout;