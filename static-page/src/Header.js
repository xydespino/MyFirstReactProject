import React from "react"
import myLogo from "./img/logolight.png"
export default function Header(){
    return(
            <header>
                <nav className = "nav">
                    <img src ={myLogo}
                         alt ="My Logo"
                         className = "myLogo"
                    />
                    <ul className = "nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
    )
}