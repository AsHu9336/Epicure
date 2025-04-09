import React from 'react'
import Navbar from '../Components/Navbar'
import { useCart, useDispatchCart } from '../Components/ContextReducer'
import { Link } from 'react-router-dom';

export default function MyCart() {

    const cartdata = useCart();
    const dispatch = useDispatchCart();

    if (cartdata.length === 0) {
        return (
            <>

                <Navbar />

                <div className="container d-flex flex-row justify-content-center ">
                    <div className="card text-center">

                        <div className="card-body">
                            <h5 className="card-title">Cart is Empty</h5>

                            <Link to="/" className="btn btn-outline-danger">Order Now!!</Link>
                        </div>

                    </div>


                </div>
            </>
        )
    }

    const handleTrash = (index) => {
        console.log("clicked")
        dispatch({ type: "REMOVE", index: index })

    }

    const handleCheckOut = async (e) => {
        let useremail = localStorage.getItem("userEmail");
        let response = await fetch("http://localhost:5000/api/myorders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: useremail,
                    order_data : cartdata,
                    order_date: new Date().toDateString()

                })
        })

        console.log(response)
        const json = await response.json()
        console.log(json)

        if(response.status === 200){
            dispatch({type :"DROP"})
        }


    }

    //console.log(cartdata)
    return (
        <>
            {console.log(cartdata)}
            <Navbar />
            <div className="container mt-10">


                <table className="table table-columns table-hover m-10 caption-top table-responsive ">
                    <caption><h1></h1></caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Size</th>
                            <th scope="col">Amount</th>
                            <th scope="col"><i className="bi bi-trash3"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartdata.map((food) => (
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{food.name}</td>
                                    <td>{food.Qty}</td>
                                    <td>{food.size}</td>
                                    <td>{food.price}</td>
                                    <td><i className="bi bi-trash-fill" onClick={handleTrash}></i></td>
                                    {/* <td><Link  className = "bi bi-trash3" type='submit'><Delete onClick={()=>{
                                        dispatch({ type: "REMOVE", index: index })
                                    }}/></Link></td> */}

                                </tr>
                            ))
                        }


                    </tbody>
                </table>

                <Link className="btn btn-outline-danger active" type="submit" onClick={handleCheckOut}>CheckOut</Link>
            </div>

        </>
    )
}
