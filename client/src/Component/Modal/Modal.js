// Imports
import "./Modal.css"
import React from 'react'

// Functional Component
const Modal = (props) => {
  
    const requireProduct = props.products.filter((items) => items._id === props.serialNo)
    
    const display = requireProduct.map((items) => {return(
        <React.Fragment key={items._id}>
            <img src={items.productImage} alt="product" />
            <div className="details">
                <p><b>Price:</b> {items.price}</p>
                <p><b>Name:</b> {items.name}</p> 
                <p><b>Details:</b> {items.details}</p> 
            </div>
        </React.Fragment>
    )})
    
  return (
    <div className="modalContainer">
      {display}
    </div>
  )
}

// Exports
export default Modal 