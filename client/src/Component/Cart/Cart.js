// Imports
import "./Cart.css"
import React, {useState} from "react"

// Functional Component
const Cart = () => {
    const [mouse, setMouse] = useState({
        mouseE : false
    })
    
    const handleMouse = () => {
        setMouse((prevState) => ({
            ...prevState,
            mouseE : true
        }))
    }
    const handleMouse2 = () => {
        setMouse((prevState) => ({
            ...prevState,
            mouseE : false
        }))
    }
    
    return(
        <div className="mainCart">
            <h1><i className="fas fa-shopping-cart" /> Cart</h1>
            <div className="line"></div>
            <div className="cartContainer">
                <div className="cartCard" style={{textDecoration : mouse.mouseE? "line-through" : null}}>
                    <img src="uploads\1557049724434Samsung-Galaxy-A30-Blue-300x300.jpg" alt="product" />
                    <div style={{padding: "0 10px"}} className="linethrow">
                        <h3>Samsung A50</h3>
                        <p>Quantity: 1</p>
                    </div>
                    <p className="ammount">20,000tk</p>
                    <b className="cancleProduct" onMouseEnter={handleMouse} onMouseLeave={handleMouse2}>x</b>
                </div>
            </div>
                <div className="subtotalContainer">
                    <div className="subtotal">
                        <p style={{fontSize: 18}}>SUBTOTAL</p>
                        <p className="ammount">20,00tk</p>
                    </div>
                    <button>CHECKOUT</button>
                </div>
        </div>
    )
}

// Exports
export default Cart