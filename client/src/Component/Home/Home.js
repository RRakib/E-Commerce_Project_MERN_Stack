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
        key : null,
        errors : ""
    })

    // Click Handle
    const handleClick = (e) => {
        setProducts((prevState) => ({
            ...prevState,
            key : e
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
                <p>{items.price} {props.userReducer.userType? <i class="fas fa-cart-plus"></i> : null}</p>
            </div>
        )
    })

    console.log(products.key)

    return(
        <div className="home">
            <div className="homeContainer">
                <div className="cart">
                    <Cart />
                </div>

                <div className="modal">
                    <Modal />
                </div>

                {props.userReducer.userType? null : <h4 style={{color: "red"}}>Login To Add Product Into The Cart</h4>}
                    <h2><hr />MOST POPULAR IN APRIL 2019<hr /></h2>
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