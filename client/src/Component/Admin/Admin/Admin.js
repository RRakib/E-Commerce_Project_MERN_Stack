// Imports
import axios from "axios"
import { connect } from "react-redux"
import React , {useState} from "react"

// Functional Component
const Admin = (props) => {
    const [state , setState] = useState({
        details : "",
        productName : "",
        productPrice : "",
        success : null
    })
    const [file , setFile] = useState({
        name : ""
    })

    // Event Handler
    const handleChange = e => {
        e.preventDefault();
        const {name , value} = e.target
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }
    const handleChange2 = e => {
        let image = e.target.files[0];
        setFile(image)
    }
        

    const handleSubmit = e => {
        e.preventDefault();
        let products = new FormData()
        products.append("name", state.productName)
        products.append("price", state.productPrice)
        products.append("productImage", file)
        axios.post("/products/add" , products)
             .then(resData => {
                 setState({success : "Product Added"})
                console.log(resData)
             })
             .catch(err => console.log(err))

        setState({
            productName : "",
            productPrice : "",
            success : null
        })
    }

    const handleClick = () => {
        props.type(null)
        props.history.push("/login")
        }
        console.log(file)
    return(
        <div className="login">
            <h2>Enter Product</h2>
            <p className="success" style={{display : state.success? "block" : "none"}}>{state.success? state.success : null}</p>
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
                    type = "text"
                    value = {state.productPrice}
                    onChange = {handleChange}
                    placeholder = "Please insert product price"
                />
                <textarea 
                    name = "details"
                    type = "text"
                    value = {state.details}
                    onChange = {handleChange}
                    placeholder = "Please insert product details"
                />
                <input 
                    type = "file"
                    onChange = {handleChange2}
                    placeholder = "Please insert product price"
                />
                <br />
                <button>Add Product</button>
            </form>
                <button onClick={handleClick}>LogOut</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        type : (type) => {dispatch({type : "LOGIN" , userType : type})}
    }
}

// Exports
export default connect(null ,mapDispatchToProps)(Admin)