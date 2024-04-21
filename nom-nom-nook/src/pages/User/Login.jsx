/* eslint-disable no-unused-vars */

import React, { useRef, useState } from 'react';
import DatePicker from 'react-date-picker';
import axios from "axios";
import { BASE_URL } from '../../config/config';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function Login() {
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert(`The name you entered was:${email}  ${password}` )

        let userForm = {
            username: email,
            password: password
        }
        axios
        .post(BASE_URL + "/user/login", userForm)
        .then((res) => {
          console.log("success")
          var tocken = res.data.tocken
          console.log(tocken)
        //   save this tocken in session storage
        // request.headers.authorization: bearer [tocken]
        })
        .catch((error) => {
            setEmail("");
            setPassword("");
        });

      }
    return (
        <div className="Login ">
            <div className="col-6 m-auto">

            <form onSubmit={handleSubmit}>
                    <div className="text-center">
                        <p className="display-4">NomNomNook</p>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3 mt-3">
                                <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email" required onChange={handleChangeEmail} />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3 ">
                                <input type="password" className="form-control" id="password" placeholder="Enter Password" name="password" required onChange={handleChangePassword} />
                                <label htmlFor="password">Password</label>
                            </div>

                        </div>

                    </div>

                    <div className="row">
                        <button type="submit" className="btn btn-primary h-8">Login</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Login;