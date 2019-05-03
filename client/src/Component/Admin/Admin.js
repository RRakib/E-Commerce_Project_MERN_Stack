// Imports
import React , {useState} from "react"

// Functional Component
const Admin = () => {
    const [state , setState] = useState({
        productName : "",
        productPrice : "",
    })
    // const [file , setFile] = useState()

    // Event Handler
    const handleChange = e => {
        e.preventDefault();
        const {name , value} = e.target
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }
    // const handleChange2 = e => {
    //     let image = e.target.value;
    //     const fd = new FormData();
    //     let y = fd.append('image' , image)
    // }
        

    const handleSubmit = e => {
        e.preventDefault();

    }

    return(
        <div className="login">
            <h1>Welcome Admin</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                    type = "text"
                    value = {state.productPrice}
                    onChange = {handleChange}
                    placeholder = "Please insert product price"
                />
                {/* <input 
                    name="image"
                    type = "file"
                    onChange = {handleChange2}
                    placeholder = "Please insert product price"
                /> */}
                <br />
                <button>Add Product</button>
            </form>
        </div>
    )
}

// Exports
export default Admin