import React from "react";

interface propsInterface {
    name:string
}

export function Friend(props:propsInterface){
    
    function buttonHandler(){
        alert("you clicked 'poke' on "+props.name)
    }
    
    return (
        <>
        <h3>Name: {props.name}</h3>
        <button onClick={buttonHandler}>poke</button>
        </>
    )
}