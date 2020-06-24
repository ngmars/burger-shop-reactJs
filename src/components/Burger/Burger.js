import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
let burger=(props) =>{
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey =>{
        return[...Array(props.ingredients[igKey])].map((_,i)=>{
            return<BurgerIngredients key={igKey +1} type={igKey} />;
        });
    }).reduce((arr,el)=>{
       return arr.concat(el) 
    },[]);
    if(transformedIngredients.length === 0){
        transformedIngredients=<p>Please add Ingredients</p>;
    }
    console.log(transformedIngredients.length)
    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>

        </div>
    );
};

export default burger;