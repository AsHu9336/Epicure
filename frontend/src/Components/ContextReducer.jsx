import React, { createContext, useContext, useReducer } from 'react'

const cardstateContext = createContext();
const cardDispatchContext = createContext();

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD TO CART":
            return [...state, {
                id: action.id,
                name: action.name,
                Qty: action.Qty,
                img: action.img,
                size: action.size,
                price: action.price
            }]

        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;

        case "DROP":
            let array = []
            return array


        default:
            console.log('Error in Reducer')
    }

}

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])

    return (
        <>
            <cardDispatchContext.Provider value={dispatch}>
                <cardstateContext.Provider value={state}>
                    {children}

                </cardstateContext.Provider>

            </cardDispatchContext.Provider>
        </>
    )
}

export const useCart = () => useContext(cardstateContext)
export const useDispatchCart = () => useContext(cardDispatchContext)
