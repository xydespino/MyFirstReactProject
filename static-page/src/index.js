import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import MainComponent from "./MainComponent"
import Footer from "./Footer"
import "./style.css"

function Page (){
    return(
        <div class = "page">
        <Header />
        <MainComponent />
        <Footer />
        </div>
    )
}

ReactDOM.render(<Page />,document.getElementById("root"))


