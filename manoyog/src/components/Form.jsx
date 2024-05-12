import React from "react"
import Data from "../assets/data.js"

export default function Form(){
    const data = Data.map(function(question){
        return `<p>${question}</p>`
    })

    console.log(data);

    return (
        <>
            <div>
                {data}
            </div>
        </>
    )
}