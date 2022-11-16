import React from 'react';
import ReactDom from 'react-dom';
let name = "Meekail"
let age 
let pronoun
if (name === "Meekail"){
    age = 25;
    pronoun = "he"
}

function Head(){
    return(
        <>
            <img src = "./logo512.png" width = "40px" alt=""/>
            <h1>Hello {name}</h1>
            <h2>{pronoun} are {age}</h2>
        </>
    )
}
function Fun(){
    return(
        <>
            <Head/>
            <h2>Fun things about react</h2>
            <ul>
                <li>Released in 2023</li>
                <li>Was originally created by someone without a life, so that we can have one </li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintainted by Facebook, i know weird</li>
                <li>Powers a lot of things, like my dick</li>
            </ul>
        </>
    )
}

const element = (
    <div>
        <Head/>
        <Fun/>
    </div>
)
console.log(element)
ReactDom.render(element, document.getElementById('root'));
