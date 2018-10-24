import React, {Component} from "react"
import ReactDom from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../src/components/Header/header"
import Footer from '../src/components/Footer/footer'

class App extends Component {
    render(){
        return <div>
            <Header />

            {/* <Footer /> */}
        </div>
    }
}

export default App
