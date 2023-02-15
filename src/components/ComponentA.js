//1. import area


// 1.1import {someNamedImport} from some location / library


//1.2 import someDefaultImport from some loacation / library



//2. functional Component defination area
export const ComponentA = props =>{
    //every function shoud return something
    return(
        <>
        <h1>today i will share props in nested Compontents from component A to Component Z</h1>
        <h2>My  name is {props.name}, {props.children}</h2>
        </>
    )
}

//3. export area
//3.1 default export

//3.2 named export

