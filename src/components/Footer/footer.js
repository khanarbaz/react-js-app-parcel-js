import React , {Component} from "react"
import ReactDom from "react-dom"

export default class Footer extends Component{
    render(){
        return (
            <footer className={["page-footer font-small blue"]}>
                <div className={["footer-copyright text-center py-3"]}>© 2018 Copyright:
                    <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
                </div>
            </footer>   
        )
    }
} 