import React from 'react';

const Register = (title) => {
return ( 


<div>
    <h1>Register</h1>
        <form>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName"/>
            </div>
            
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName"/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email"/>
            </div>
            <div>
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phoneNumber"/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password"/>
            </div>
            <div>
                <label htmlFor="password">Confirm Password:</label>
                <input type="password" id="confirmPassword"/>
            </div>
            <button type="submit">Check In</button>



        </form>




</div>
)}

export default Register;