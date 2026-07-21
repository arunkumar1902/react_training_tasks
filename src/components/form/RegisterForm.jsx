import React, { useState } from 'react'
import "./RegisterForm.css"

export default function RegisterForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        dob: "",
        gender: "",
        address: "",
        city: ""
    });

    const [error, setError] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        setError(prev => ({
            ...prev,
            [name]: ""
        }));
    };

    const validateForm = () => {

        let newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First Name is required"
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last Name is required"
        }
        if (!formData.email) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }
        if (!formData.mobile) {
            newErrors.mobile = "Mobile Number is required"
        } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Enter a valid 10-digit mobile number";
        }
        if (!formData.password) {
            newErrors.password = "Password is required"
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters"
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm Password is required"
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Password do not match"
        }
        if (!formData.dob) {
            newErrors.dob = "Date of Birth is required"
        }
        if (!formData.gender) {
            newErrors.gender = "Select Gender"
        }
        if (!formData.address.trim()) {
            newErrors.address = "Address is required"
        }
        if (!formData.city.trim()) {
            newErrors.city = "City is required"
        }

        setError(newErrors);

        return Object.keys(newErrors).length === 0;
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            alert("Form registered successfully");
            console.log(formData);

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                mobile: "",
                password: "",
                confirmPassword: "",
                dob: "",
                gender: "",
                address: "",
                city: ""
            });

            setError({});

        }
    }


    return (
        <div>
            <h2>RegisterForm</h2>
            <form onSubmit={handleSubmit} className='registerForm'>

                <section>
                    <label htmlFor="firstName">First Name : </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {error.firstName && <div className='errorMessage'>{error.firstName}</div>}
                </section>

                <section>
                    <label htmlFor="lastName">Last Name : </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Enter Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {error.lastName && <div className='errorMessage'>{error.lastName}</div>}
                </section>

                <section>
                    <label htmlFor="email">Email : </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {error.email && <div className='errorMessage'>{error.email}</div>}
                </section>

                <section>
                    <label htmlFor="mobile">Mobile Number : </label>
                    <input
                        type="tel"
                        name="mobile"
                        id="mobile"
                        maxLength={10}
                        placeholder="Enter Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                    {error.mobile && <div className='errorMessage'>{error.mobile}</div>}
                </section>

                <section>
                    <label htmlFor="password">Password : </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {error.password && <div className='errorMessage'>{error.password}</div>}
                </section>

                <section>
                    <label htmlFor="confirmPassword">Confirm Password : </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm your Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {error.confirmPassword && <div className='errorMessage'>{error.confirmPassword}</div>}
                </section>

                <section>
                    <label htmlFor="dob">Date of Birth : </label>
                    <input
                        type="date"
                        name="dob"
                        id="dob"
                        placeholder="Enter Date of Birth"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                    {error.dob && <div className='errorMessage'>{error.dob}</div>}
                </section>

                <section>
                    <label htmlFor="gender">Gender : </label>
                    <div className='genderDiv'>
                        <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleChange}
                    />
                    <label htmlFor="male">Male</label>
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleChange}
                    />
                    <label htmlFor="female">Female</label>
                    </div>
                    {error.gender && <div className='errorMessage'>{error.gender}</div>}

                </section>

                <section>
                    <label htmlFor="address">Address : </label>
                    <textarea
                        name="address"
                        id="address"
                        placeholder="Enter Address"
                        value={formData.address}
                        onChange={handleChange}
                    ></textarea>
                    {error.address && <div className='errorMessage'>{error.address}</div>}
                </section>

                <section>
                    <label htmlFor="city">City : </label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter City"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    {error.city && <div className='errorMessage'>{error.city}</div>}
                </section>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
