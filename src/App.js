import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import NavbarHead from "./components/Navbar/navbar";
import MainPage from "./components/Layout/MainPage";
import {Route, Switch} from 'react-router-dom';
import LoginPage from "./components/pages/loginPage";

function App() {
    return (
        <React.Fragment>
                <NavbarHead />
                <div className='bg-image'>
                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/login" component={LoginPage} />
                    </Switch>
                </div>
        </React.Fragment>
    )
}

export default App;
