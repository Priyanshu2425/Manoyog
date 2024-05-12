import React from "react"
import Logo from "../assets/logo.png"
import "../assets/navbar.css"

export default function Navbar(){
    return (
        <>
            <nav className="navbar">
                <span className="navbar-text-logo"><h2>ManoYog</h2></span>
                <div className="navItems">
                    <h4> Programs </h4>
                    <h4> Download App </h4>
                    <h4> Log In </h4>
                    <h4> Sign Up </h4>
                </div>
            </nav>
        </>
    )
}