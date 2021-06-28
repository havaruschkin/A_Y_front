import React from "react";

const LoginPage = () => {
    return (
        <div style={{height: "100vh"}}
             className="d-flex justify-content-center align-items-center">
            <div>
                <h1 className="text-center" style={{color: "azure"}}>Login</h1>
                <form>
                    <div className="form-group">
                        <input type="text" id="input1"/>
                    </div>
                    <div className="form-group">
                        <input type="password" id="password"/>
                    </div>
                    <div>
                        <button className="btn btn-primary">
                            OK
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
