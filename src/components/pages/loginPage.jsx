import React, {useState} from "react";
import Input from "../input";
import authService from "../../service/authService";

const LoginPage = () => {
    const [username, setUsernameLogin] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit (e){
        e.preventDefault();
        doSubmit();
    }

    async function doSubmit() {
        try {
            await authService.login(username, password);
            const {state} = authService.getCurrentUser();
            window.location = state ? state.from.pathname : "/";
        } catch (ex) {
            console.log(ex)
        }
    }

    return (
        <div style={{height: "100vh"}}
             className="d-flex justify-content-center align-items-center">
            <div>
                <h1 className="text-center">Login</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        label='Login'
                        name='username'
                        type='text'
                        onChange={e => setUsernameLogin(e.target.value)}
                    />
                    <Input
                        label='Password'
                        name='password'
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="btn btn-primary">
                        OK
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
