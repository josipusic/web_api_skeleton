import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, setCartItems} = useContext(Context)
    const [isOrdering, setIsOrdering] = useState(false)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function manageOrdering() {
        setIsOrdering(true)
        setTimeout(() => {
            setIsOrdering(false)
            console.log('Ordered!')
            setCartItems([])            
        }, 3000)
    }
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                <button
                    onClick={manageOrdering}
                    disabled={isOrdering}
                >
                    {isOrdering ? 'Ordering...' : 'Place Order'}
                    </button>
            </div>
        </main>
    )
}

export default Cart