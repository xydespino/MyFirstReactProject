import React from "react"
import ReactDom from "react-dom"


function Header(){
    return(
            <header>
                <nav className = "nav">
                    <img src = "./img/logolight.png" className = "logo"/>
                    <ul className = "nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
    )
}
function Footer(){
    return(
            <footer>
                <small> Xyd development. All rights Reserved</small>
            </footer>
    )
}
function MainContent() {
    return(
        <div>
            
            <h1>Hi! I'm Xyd.</h1>
            <h1>Fun facts about me</h1>
            <ul>
                <li>I was born in Baguio City, Philippines on July 12, 2000</li>
                <li>My family and I moved to Toronto, Canada in June 2012</li>
                <li>We moved again, to Halifax, Nova Scotia in July 2015</li>
                <li>I am currently in my last year of my Bachelors Degree in Computer Science at Dalhousie </li>
            </ul>

        </div>
    )
}

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
