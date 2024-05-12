import React from "react"
import "../assets/card.css"


export default function ProgramCard(props){
    // var programs = ["Meditation", "Manoyog", "Mindful", "ManoYog Connect"];

    return (
        <>
            <div className="program-card">
                <div className="img-info">

                </div>
                    <p>{props.prg}</p>

                
            </div>
        </>
    )
}