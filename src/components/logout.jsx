import {Component} from "react";
import authService from "../service/authService";

class Logout extends Component {
    componentDidMount() {
        authService.logout();
        window.location = "/";
    }

    render() {
        return null;
    }
}

export default Logout;
