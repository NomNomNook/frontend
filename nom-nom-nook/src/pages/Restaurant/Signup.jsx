/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import DatePicker from 'react-date-picker';
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { BASE_URL } from '../../config/config';
import Signup from '../User/Signup';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function ResSignup () {
    const navigator = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // alert(`The name you entered was: ` )
        let userForm = {
            name: name,
            email:email, 
            password: password,
            phone: phone,
        }
        

        console.log(userForm)


        axios
        .post(BASE_URL+"/admin/signup", userForm)
        .then((res) => {
          console.log("success")
        navigator("/admin/login")
          
        })
        .catch((error) => {
          console.log(error);
        });

      }

      return (
        <div className="Signup ">
            <div className="col-6 m-auto">

            <form onSubmit={handleSubmit}>
                    <div className="text-center">
                        <p className="display-4">NomNomNook</p>
                        <p className="display-6">Admin Register</p>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3 mt-3">
                                <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" required onChange={handleChangeName} />
                                <label htmlFor="name">Name</label>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3 mt-3">
                                <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email" required onChange={handleChangeEmail} />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mb-3 mt-3">
                                <input type="phone" className="form-control" id="phone" placeholder="Enter Phone" name="phone" required onChange={handleChangePhone} />
                                <label htmlFor="phone">Phone</label>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3 mt-3">
                                <input type="password" className="form-control" id="password" placeholder="Enter Password" name="password" required onChange={handleChangePassword} />
                                <label htmlFor="password">Password</label>
                            </div>

                        </div>

                    </div>

                    <div className="row">
                        <button type="submit" className="btn btn-primary h-8">Register</button>
                    </div>
                </form>
            </div>

        </div>
    );
}
export default ResSignup;
