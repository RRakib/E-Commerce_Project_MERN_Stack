// Imports
import React , {useState} from "react"

// Functional Component
const Admin = () => {
    const [state , setState] = useState({
        productName : "",
        productPrice : "",
        productImage : {
            name : ""
        }
    })

    // Event Handler
    const handleChange = e => {
        const {name , value} = e.target
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }
    const handleChange2 = e => {
        const {name , value} = e.target
        setState(prevState => ({
            ...prevState,
            [name] : {name : value}
        }))
    }
    const handleSubmit = e => {
        e.preventDefault();
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    name = "productName"
                    type = "text"
                    value = {state.productName}
                    onChange = {handleChange}
                    placeholder = "Please insert product name"
                />
                <br />
                <input 
                    name = "productPrice"
                    type = "password"
                    value = {state.productPrice}
                    onChange = {handleChange}
                    placeholder = "Please insert product price"
                />
                <input 
                    name = "productImage"
                    type = "file"
                    value = {state.name}
                    onChange = {handleChange2}
                    placeholder = "Please insert product price"
                />
                <br />
                <button>Add Product</button>
            </form>
        </div>
    )
}

// Exports
export default Admin