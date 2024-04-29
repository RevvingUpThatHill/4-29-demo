import React from "react";
import { Friend } from "../Components/Friend";

export function HomePage(){
    return (
        <>
            <h1>Home Page Component</h1>
            <Friend name="joe"></Friend>
            <Friend name="jill"></Friend>
            <Friend name="dave"></Friend>
            <Friend name="sam"></Friend>
        </>
    )
}