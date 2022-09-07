import React from "react";

export function Sum({numbers = []}){
    let somma = 0;
    numbers.forEach(item => somma+=item)
    return (
        <h1>The sum is: {somma}</h1>
    )
}