import React, { useEffect, useRef, useState } from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'
import { useCart, useDispatchCart } from "./ContextReducer";

export default function Cards(props) {

    let options = props.food_options || {};
    let priceOptions = Object.keys(options)


    const [Quantity, setQuantity] = useState(1);
    const [size, setsize] = useState("")

    let dispatch = useDispatchCart();
    let cartdata = useCart()


    const handleCart = async () => {
        await dispatch({
            type: "ADD TO CART",
            id: props.food_data._id,
            img: props.food_data.img,
            name: props.food_data.name,
            price: price,
            Qty: Quantity,
            size: size
        })

        //console.log(cartdata)
    }
    let priceref = useRef();

    const price = Quantity * parseInt(options[size])

    useEffect(()=>{
        setsize(priceref.current.value)
    })
    return (
        <div className='card_container'>
            <div className="card">
                <img className="card-image" src={props.food_data.img} alt="" />
                <div className="card-content">
                    <h2 className="card-title">{props.food_data.name}</h2>
                    <p className="card-text">{props.food_data.description}.</p>
                </div>
                <div className="specification">
                    <select name="count" id="quantity_count" onChange={(e) => setQuantity(e.target.value)}>
                        {
                            Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1}</option>
                                )
                            })
                        }
                    </select>
                    <select  ref={priceref} onChange={(e)=> setsize(e.target.value)}>
                        {
                            priceOptions.map((data) => {
                                return <option key={data._id} value={data}>{data}</option>
                                // <options key={data._id} value={data}>{data}</options>


                            })
                        }
                    </select>
                    <hr />
                    <span className="price"><h2>{price}</h2></span>
                    <button className="btn btn-warning" type="submit" to='/' onClick={handleCart}>Add to Cart 
                    
                    </button>


                </div>

            </div>
        </div>
    )
}
