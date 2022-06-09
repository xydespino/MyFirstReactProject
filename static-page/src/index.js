import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import MainComponent from "./MainComponent"
import Footer from "./Footer"

function Page (){
    return(
        <div>
        <Header />
        <MainComponent />
        <Footer />
        </div>
    )
}

ReactDOM.render(<Page />,document.getElementById("root"))


