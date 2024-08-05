import React, { useState } from 'react'
import './SignUpform.css'
import { Link, useNavigate } from 'react-router-dom';

export default function SignUpform() {

    const [info, setinfo] = useState({
        name: '',
        email: '',
        password: '',
        location: ''
    })

    let navigate = useNavigate();

    const handlesubmit = async (e) => {
        //e.preventDefault();
        e.preventDefault();
        //console.log(e.target);
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(
                {
                    name: info.name,
                    email: info.email,
                    password: info.password,
                    location: info.location
                })
        });
        console.log(response)

        const json = await response.json();
        console.log(json)

        if (!json.success) {
            alert("Enter Valid Credentials ")
        }
        if (json.success) {
            alert("Signed In");
            navigate('/')

        }
    }

    const onchange = (event) => {
        const { name, value } = event.target;

        setinfo({ ...info, [name]: value })

    }
    return (
        <>
            <div className="w-60 shadow-lg p-3 m-5 bg-body-tertiary rounded ">

                <form onSubmit={handlesubmit}>
                    <h2>Sign Up</h2>
                    <div className="mb-4">
                        <label htmlFor="name">Name</label>
                        <input type="text" class="form-control"  name="name" value={info.name} onChange={onchange} required />
                    </div>
                    <div className="mb-4">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" value={info.email} onChange={onchange} required />
                    </div>
                    <div className="mb-4">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword11" name="password" value={info.password} onChange={onchange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Location</label>
                        <input type="location" class="form-control" name="location" value={info.location} onChange={onchange} required />
                    </div>
                    <div className='btn-container'>
                        <button className="btn-form" type="submit" > SignUp</button>
                        <Link className="btn-form-newuser" type="submit" to="/Login"  > Already a User</Link>
                    </div>
                </form>
            </div>


        </>
    )
}
