import React from "react"
import ProgramCard from "./ProgramCard"
import MainImage from "../assets/vector-yoga-icon.jpg"
import "../assets/main.css"
export default function Main(){
    return (
        <>  
            <div className="main-content">
                <div className="text-content">
                    <h1> ManoYog </h1>
                    <p> {`ManYog is your ultimate mental wellness app, 
                    combining mindful exercises, meditation, a supportive 
                    community, and professional help. Cultivate inner calm, 
                    connect with like-minded individuals, and access licensed
                    therapists, all in one place. Download ManYog today 
                    to embark on your journey towards a happier, healthier mind.`}</p>
                </div>
                <img src={MainImage}/>
            </div>
        </>
    )
}