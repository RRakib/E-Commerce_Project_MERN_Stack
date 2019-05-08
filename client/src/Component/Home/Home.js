// Imports
import "./Home.css"
import axios from "axios"
import Cart from "../Cart/Cart"
import Modal from "../Modal/Modal"
import {connect} from "react-redux"
import React , {useState , useEffect} from "react"

const Home = (props) => {

    // New State Hook For Functional Component
    const [products , setProducts] = useState({
        allProducts : [],
        errors : "",
        key : null,
        cart: false,
        modal : false
    })

    // Click Handle
    const handleClick = (e) => {
        setProducts((prevState) => ({
            ...prevState,
            key : e,
            modal : true
        }))
    }

    // Click Handle2 Modal
    const handleClick2 = () => {
        setProducts((prevState) => ({
            ...prevState,
            modal : false,
            cart : true
        }))
    }

    // Click Handle3 Cart
    const handleClick3 = () => {
        setProducts((prevState) => ({
            ...prevState,
            cart : !prevState.cart
        }))
    }

    // Using Effect Lifecycle Hooks
    useEffect(() => {
        let isSubscribed = true
        axios.get("/products/add")
             .then(resData => {
                 if(isSubscribed){
                    setProducts({
                        allProducts : resData.data
                    })
                 }
                })
             .catch(err => setProducts((prevState) => ({
                 ...prevState,
                 errors : err
             })))
        return () => isSubscribed = false
    }, [])

    const product = products.allProducts.map(items => {
        return(
            <div key={items._id} onClick={() => handleClick(items._id)}>
                <img src={items.productImage} alt="product" />
                <b>{items.name}</b>
                <p>{items.price} {props.userReducer.userType? <i className="fas fa-cart-plus"></i> : null}</p>
            </div>
        )
    })

console.log(products.cart)
    return(
        <div className="home">
            <div className="homeContainer">

                <div className="toggleCart"  onClick={handleClick3} style={{display : props.userReducer.userType? "block" : "none"}}>
                    <i className="fas fa-shopping-cart" />
                </div>


                {/* Cart */}
                <div className="cart" style={{right : products.cart? 0 : -550}}>
                    <Cart />
                </div>

                {/* Modal */}
                <div className="modal" style={{display : products.modal? "block" : "none"}}>
                    <h3 className="close" onClick={handleClick2}>X</h3>
                    <Modal products={products.allProducts} serialNo={products.key}/>
                </div>

                {/* // Login Message */}
                {props.userReducer.userType? null : <h4 style={{color: "red"}}>Login To Add Product Into The Cart</h4>}
                
                <hr /><h2>MOST POPULAR IN APRIL 2019</h2><hr />
                
                <div className="products">
                    {products.allProducts.length > 0? product : <h2 className="loading">Loading...</h2>}
                </div>
            </div>
        </div>
    )
}

// Map State To Props
const mapStateToProps = (state) => {
    return state
  }
  

export default connect(mapStateToProps)(Home);