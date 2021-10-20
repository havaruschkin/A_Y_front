import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import NavbarHead from "./components/Navbar/navbar";
import MainPage from "./components/pages/MainPage";
import {Route, Switch} from 'react-router-dom';
import LoginPage from "./components/pages/loginPage";
import authService from "./service/authService";
import Logout from "./components/logout";

class App extends Component{
    state = {user: ""};

    async componentDidMount() {
        await this.initUser();
    }

    async initUser() {
        const user = authService.getCurrentUser();
        this.setState({user});
    }

    render() {
        const {user} = this.state;
        return (
            <React.Fragment>
                <NavbarHead user={user}/>
                <div>
                    <Switch>
                        <Route path="/" exact component={MainPage} />

                        <Route path="/login" component={LoginPage} />
                        <Route path="/logout" component={Logout} />
                    </Switch>
                </div>
            </React.Fragment>
        )
    }
}

export default App;
