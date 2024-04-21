/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import DatePicker from 'react-date-picker';
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { BASE_URL } from '../../config/config';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// todo: this page is needs to be rethought

function RestaurantNew() {
    const navigate = useNavigate()
    const [name, nameSet] = useState("");
    const [registrationNumber, registrationNumberSet] = useState("");
    const [gstNumber, gstNumberSet] = useState("");
    const [fssaiNumber, fssaiNumberSet] = useState("");
    const [subscriptionId, subscriptionIdSet] = useState(1);
    const [adminId, adminIdSet] = useState(1);
    const [isVerified, isVerifiedSet] = useState(true);
    const [isActive, isActiveSet] = useState(true);
    const [description, descriptionSet] = useState("");
    const [seatsAvailable, seatsAvailableSet] = useState(0);

    const nameHandle = (e) => {
        nameSet(e.target.value);
    }
    const registrationNumberHandle = (e) => {
        registrationNumberSet(e.target.value);
    }
    const gstNumberHandle = (e) => {
        gstNumberSet(e.target.value);
    }
    const fssaiNumberHandle = (e) => {
        fssaiNumberSet(e.target.value);
    }

    const adminIdHandle = (e) => {
        adminIdSet(e.target.value);
    }

    const descriptionHandle = (e) => {
        descriptionSet(e.target.value);
    }
    const seatsAvailableHandle = (e) => {
        seatsAvailableSet(e.target.value);
    }


    const submitHandle = (event) => {
        event.preventDefault();

        let payload = {
            name: name,
            registrationNumber: registrationNumber,
            gstNumber: gstNumber,
            fssaiNumber: fssaiNumber,
            subscriptionId: subscriptionId,
            adminId: adminId,
            isVerified: isVerified,
            isActive: isActive,
            description: description,
            seatsAvailable: seatsAvailable,
        }

        
        const your_token = "get from localStorage"


        axios.post({headers: {
            "Access-Control-Allow-Origin" : "*",
            "Content-type": "Application/json",
            "Authorization": `Bearer ${your_token}`
            }   
        }  , BASE_URL + "/admin/signup",payload).then((res) => {
            console.log("Success")

            navigate("admin/restaurants/")

        }).catch((error) => {
            showError(error.message);
        })
    }

    const showError = (msg) => {
        alert(msg);
    }

    return (
        <div className='ResSignup'>
            <h2>Restaurant Registration</h2>
            <form onSubmit={submitHandle}>
                <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3 mt-3">
                            <input id="name" type="text" className="form-control" value={name} placeholder="Enter name" onChange={nameHandle} />
                            <label htmlFor='name'>Restaurant Name</label>
                        </div>
                    </div>
                    <div className="col">
                    <div className="form-floating mb-3 mt-3">
                    <input id='seats' type="number" className="form-control" placeholder='seats' value={seatsAvailable} onChange={seatsAvailableHandle} />
                    <label htmlFor='seats'>Available Seats</label>
                </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="form-floating mb-3 mt-3">
                    <label>Registration Number:</label>
                    <input type="text" className="form-control" value={registrationNumber} onChange={registrationNumberHandle} />
                </div>
                    </div>
                    <div className="col">
                    <div className="form-floating mb-3 mt-3">
                    <label>GST Number:</label>
                    <input type="text" className="form-control" value={gstNumber} onChange={gstNumberHandle} />
                </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="form-floating mb-3 mt-3">
                    <label>FSSAI Number:</label>
                    <input type="text" className="form-control" value={fssaiNumber} onChange={fssaiNumberHandle} />
                </div>
                    </div>
                    <div className="col">
                    <div className="form-floating mb-3 mt-3">
                    <label>Admin ID:</label>
                    <input type="text" className="form-control" value={adminId} onChange={adminIdHandle} />
                </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="form-floating mb-3 mt-3">
                    <label>Description:</label>
                    <textarea className="form-control" value={description} onChange={descriptionHandle} />
                </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col">
                    <button type="submit" className="btn btn-primary h-8">Register</button>
                    </div>
                </div>

                
                
                
                
                
                
            </form>
        </div>
    )

}

export default RestaurantNew;