import React, { Component, useState} from 'react'
import { Redirect } from "react-router-dom"
import "./style.css"
//import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForms";


export default class Login extends Component {

    constructor(props) {
        
        super(props)
        const token = localStorage.getItem("token")
        //const [isError, setIsError] = useState(false);

        let loggedIn = true
        if (token === null) {
            loggedIn = false
        }
        this.state = {
            username: "",
            password: "",
            loggedIn,
            isError:false
        }
        this.onChange = this.onChange.bind(this)
        this.submitform = this.submitform.bind(this)

    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value

        })

    }
    submitform(e) {
        e.preventDefault()
        const { username, password } = this.state
        //login magic
        if (username === "hruday@gmail.com" && password === "hruday123") {
            localStorage.setItem("token", "kkkkkk")
            this.setState({
                loggedIn: true
            })
        }
        else{
            this.setState({isError:true});

        }

    }
    

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/admin" />
        }
        return (
            <div id="login">
                <h1>login</h1>
                <form onSubmit={this.submitform} id="formstyle" >
                    <input type="text" placeholder="Username" name="username" required className="mb-3" value={this.state.username} onChange={this.onChange} />
                    <input type="password" placeholder="Password" name="password" required className="mb-4" value={this.state.possword} onChange={this.onChange} />
                    <input className="button" type="submit" value="Login" />
                </form>
                { this.state.isError &&<p>The username or password provided were incorrect!</p> }

            </div>
        )
    }
}







