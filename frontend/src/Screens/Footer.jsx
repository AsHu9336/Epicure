import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
            <div className="container my-5">
                <section className="">
                    <footer className="text-center " >
                        <div className="container p-4 pb-0">
                            <section className="">
                                <p className="d-flex justify-content-center align-items-center">
                                    <span className="me-3">Register for free</span>
                                    <Link type="button" className="btn btn-outline-success btn-rounded" to="/">
                                        Sign up!
                                    </Link>
                                </p>
                            </section>
                        </div>
                        <div className="text-center p-3" >
                            © 2020 Copyright:
                            <Link className="" to="">BeFoodie.com</Link>
                        </div>
                    </footer>
                </section>
            </div>

        </>
    )
}
