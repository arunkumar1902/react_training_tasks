import React, { useState } from 'react'
import './ConditionalRendering.css'

export default function ConditionalRendering() {
    const [login, setLogin] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const data = [
        {
            name: "Arun",
            age: 24,
            city: "Salem",
            email: "arun@gmail.com",
            occupation: "Software Engineer"
        },
        {
            name: "Sanjeeth",
            age: 23,
            city: "Coimbatore",
            email: "sanjeeth@gmail.com",
            occupation: "UI/UX Designer"
        },
        {
            name: "Nithish",
            age: 25,
            city: "Bengaluru",
            email: "nithish@gmail.com",
            occupation: "Software Engineer"
        },
        {
            name: "Sanjay",
            age: 24,
            city: "Hyderabad",
            email: "sanjay@gmail.com",
            occupation: "Data Analyst"
        },
        {
            name: "Jagir",
            age: 29,
            city: "Kochi",
            email: "jagir@gmail.com",
            occupation: "Frontend Developer"
        }
    ];

    return (
        <div>

            <div className='mainDiv'>
                {
                    login ?
                        <div className='welcomeDiv'>
                            <h3>Welcome Back!</h3>
                            <div className='buttonDiv'>
                                {showProfile && <span>Name: Admin</span>}
                                <button onClick={()=> setShowProfile(!showProfile)}>{showProfile ? "Hide Profile" : "Show Profile"}</button>
                                <button onClick={() => setLogin(!login)}>{login ? "Logout" : "Login"}</button>
                            </div>

                        </div>
                        :
                        <div className='loginStatus'>
                            <h3>Please Login</h3>
                            <button onClick={() => setLogin(!login)}>{login ? "Logout" : "Login"}</button>

                        </div>
                }

                {
                    login && <div className='list'>
                        <h1>Employees List : </h1>
                        <div className='profile'>
                            {data.map((profile, index) => (
                                <div key={index} className='profileCard'>
                                    <ul>
                                        <li><b>Name : </b> {profile.name}</li>
                                        <li><b>Age : </b> {profile.age}</li>
                                        <li><b>City : </b> {profile.city}</li>
                                        <li><b>Email : </b> {profile.email}</li>
                                        <li><b>Occupation : </b> {profile.occupation}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
