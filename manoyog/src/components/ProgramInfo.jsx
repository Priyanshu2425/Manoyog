import React from "react"
import ProgramCard from "./ProgramCard"
import "../assets/program-info.css"
const data = ["Meditation","Mindful Exercises","ManoYog Community","ManoYog Connect"]
export default function ProgramInfo(){
    return (
    <>
        <div className="program-section">
            <ProgramCard prg="Meditation"/>
            <ProgramCard prg="Mindful Exercises"/>
            <ProgramCard prg="ManoYog Community"/>
            <ProgramCard prg="ManoYog Connect"/>
        </div>
    </>
    )
}