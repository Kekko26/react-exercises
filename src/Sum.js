import React from "react";

export function Sum({numbers = [10,10,10,10]}){
    let somma = 0;
    numbers.forEach(item => somma+=item)
    return (
        <h1>The sum is: {somma}</h1>
    )
}