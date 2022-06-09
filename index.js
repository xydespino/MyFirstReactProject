import React from "react"
import ReactDom from "react-dom"
import Header from "./Header"
import Header from "./MainComponent"
import Header from "./Footer"

function Page (){
    return(
        <div>
        <Header />
        <MainContent />
        <Footer />
        </div>
    )
}


ReactDOM.render(<Hello/ >, document.getElementById("root"))
