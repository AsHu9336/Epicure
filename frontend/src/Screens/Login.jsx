import React from 'react'
import '../Components/SignUpform.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

export default function Login() {

    const [info, setinfo] = useState({
        email: '',
        password: '',
    })
    let navigate = useNavigate()

    const handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/loginuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: info.email,
                    password: info.password,

                })
        })

        console.log(response);
        const json = await response.json();
        console.log(json)

        if(!json.success){
            alert("Enter Valid Credentials ")
        }
        if(json.success){
            localStorage.setItem("authToken",json.success);
            localStorage.setItem('userEmail', info.email)
            //console.log( localStorage.getItem("authToken"))
            //console.log("authToken",json.authToken);
            //alert("Logged In!!");
            navigate('/');
        }

    }
    

    const onchange = (e) => {
        const { name, value } = e.target
        setinfo({ ...info, [name]: value });
    }
    return (
        <>
            <Navbar />
            <div className="shadow-lg p-3 m-5 bg-body-tertiary rounded">

                <form className="signup-form" onSubmit={handlesubmit}>
                    <h2>Login</h2>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={info.email} onChange={onchange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={info.password} onChange={onchange} required />
                    </div>

                    <div className='btn-container'>
                        <button className="btn-form" type="submit" > Login</button>
                        <Link className="btn-form-newuser" type="submit" to="/SignUpPage"  > I am New User</Link>
                    </div>
                </form>
            </div >

        </>
    )
}
