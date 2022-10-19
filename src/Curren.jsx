import React from "react";
import Props from "./Mni";

function Curren(){
    let arr =[]
    for(let i=1;i<=10;i++){
        arr.push({
            id:i,
            name: `Name - ${i}`,
        }) 
    }
    console.log(arr)



    return(
        <>
        {arr.map((element)=>{
            <Props mani = {element.id} maran = {element.name}/>
        })}

        </>
    )
}


// function fum(a,b,c){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// k = 1 
// s = 2
// y = 5

// fum(k,s,y)

export default Curren