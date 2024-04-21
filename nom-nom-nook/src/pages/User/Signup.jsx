/* eslint-disable no-unused-vars */

import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import DatePicker from 'react-date-picker';
import axios from "axios";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function Signup() {
    const [userForm, setUserForm] = useState({
        name: "",
        email: "",
        birthday: "",
        phone: "",
        password: "",
      });

      const onInputChange = (e) => {
        setUserForm((prevNext) => ({
          ...prevNext,
          [e.target.name]: e.target.value,
        }));
      };
    const [birthday, setDate] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const dateInputRef = useRef(null);

    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeBirthday = (e) => {
        setDate(e.target.value);
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

        userForm.birthday = new Date()    
        userForm.anniversary = new Date()

        console.log(userForm)


        axios
        .post("http://localhost:8080/user/signup", userForm)
        .then((res) => {
          console.log("success")
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
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3 mt-3">
                                <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" required onChange={onInputChange} />
                                <label htmlFor="name">Name</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mb-3 mt-3">
                                <input className="form-control" id="birthday" placeholder="Birthday" name="birthday" type="date" onChange={onInputChange} ref={dateInputRef}  />
                                <label htmlFor="birthday">Birthday</label>
                            </div>


                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3 mt-3">
                                <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email" required onChange={onInputChange} />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mb-3 mt-3">
                                <input type="phone" className="form-control" id="phone" placeholder="Enter Phone" name="phone" required onChange={onInputChange} />
                                <label htmlFor="phone">Phone</label>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3 mt-3">
                                <input type="password" className="form-control" id="password" placeholder="Enter Password" name="password" required onChange={onInputChange} />
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

export default Signup;