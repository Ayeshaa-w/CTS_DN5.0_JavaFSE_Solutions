import React, { Component } from "react";
import "./App.css";

import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";

class App extends Component {

    constructor() {

        super();

        this.state = {

            isLoggedIn:false

        };

    }

    login = () => {

        this.setState({

            isLoggedIn:true

        });

    };

    logout = () => {

        this.setState({

            isLoggedIn:false

        });

    };

    render(){

        let page;

        if(this.state.isLoggedIn){

            page=<UserPage/>;

        }

        else{

            page=<GuestPage/>;

        }

        return(

            <div style={{textAlign:"center"}}>

                <h1>Ticket Booking App</h1>

                {page}

                <br/>

                {
                    this.state.isLoggedIn ?

                    <button onClick={this.logout}>
                        Logout
                    </button>

                    :

                    <button onClick={this.login}>
                        Login
                    </button>
                }

            </div>

        );

    }

}

export default App;