import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'

export default function MyOrder() {
    const [orderdata, setorderdata] = useState({})


    const fetchMyOrder = async () => {

        await fetch("http://localhost:5000/api/orderdata", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                email: localStorage.getItem("userEmail")
            })
        }).then(async (res) => {

            const response = await res.json();

            //console.log(response);

            await setorderdata(response)

        })
    }

    useEffect(() => {
        fetchMyOrder()
    }, [])
    return (
        <>
            <Navbar />
            {/* <div>heloo</div> */}

            <div className='container'>
                <div className='row'>

                    {orderdata  ? Array(orderdata).map(data => {
                        return (
                            data.orderdata ?
                                data.orderdata.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div  >
                                                    {arrayData.Order_date ? <div className='m-auto mt-5'>

                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                    </div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.qty}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        <span className='m-1'>{data}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>
            </div>

        </>
    )
}
