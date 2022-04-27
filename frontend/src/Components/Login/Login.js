import React, {Component} from "react";
import {PostData} from "../../Data/PostData";
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        }
        this.login=this.login.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    login() {
        // console.log("Login function");

        PostData('login', this.state).then ((result) => {
            let responseJSON = result;
            console.log(responseJSON);
        });
    }

    onChange(e) {
        // console.log("value");
        // this.setState({username:e.target.value});

        this.setState({[e.target.name]:e.target.value});
        console.log(this.state);
    }

    render() {
        return (
            <div className="connexion">
                <div className="title">
                    <h2>Connexion</h2>
                </div>

                <div className="user">
                    <label>Identifiant</label>
                    <input name="username" type="text" placeholder="nom d'utilisateur" onChange={this.onChange}/>
                </div>

                <div className="password">
                    <label>Mot de passe</label>
                    <input name="password" type="password" placeholder="mot de passe" onChange={this.onChange}/>
                </div>

                <div className="submit">
                    <input type="submit" value="se connecter" className="button" onClick={this.login}/>
                </div>

                <div className="register">Pas encore inscrit ?</div>
            </div>
        );
    }
}

export default Login;