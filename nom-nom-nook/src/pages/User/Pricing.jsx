import Navbar from "../../components/Navbar";
import React from "react";
import "../../App.css";


function Pricing(){
    return (
        <div className="Pricing">
        <Navbar />
        <div className="start">
            <h1>Try Nom Nom Nook With a Free Trial</h1>
            <p>Start your 7 days trial - No card required, Cancel anytime.  </p>

            <h2>Our Plans</h2>
            <div className="cont">
            
                <div className="one">
                    <h3>Lighter Plan</h3>
                    <p>Valid For 7 Days</p>

                    <div className="list">
                        <li>Leads generation</li>
                        <li>Sales Analytics</li>
                        <li>Market analysis</li>
                        <li>expert support</li>
                        <li>Email campaign </li>
                        <li>more </li>
                    </div>
                    <button>10$ per Day</button>
                </div>





                <div className="two">
                <h3>Premium Plan</h3>
                    <p>Valid For 1 Year</p>

                    <div className="list">
                        <li>Leads generation</li>
                        <li>Sales Analytics</li>
                        <li>Market analysis</li>
                        <li>expert support</li>
                        <li>Email campaign </li>
                        <li>more </li>
                    </div>
                    <button>700$ For 1 Year</button>
                </div>
                <div className="three">
                <h3>Stater Plan</h3>
                    <p>Valid For 6 Month</p>

                    <div className="list">
                        <li>Leads generation</li>
                        <li>Sales Analytics</li>
                        <li>Market analysis</li>
                        <li>expert support</li>
                        <li>Email campaign </li>
                        <li>more </li>
                    </div>
                    <button>400$ For 6 Month</button>
                </div>
            
            </div>
            <footer>@Code Dragons</footer>



        </div>
        </div>


    


    );
}
export default  Pricing; 
