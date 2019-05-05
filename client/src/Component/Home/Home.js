// Imports
import "./Home.css"
import axios from "axios"
import {connect} from "react-redux"
import React , {useState , useEffect} from "react"

const Home = (props) => {
    const [products , setProducts] = useState({
        allProducts : [],
        errors : ""
    })
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
            <div key={items._id} >
                <img src={items.productImage} alt="product" />
                <b>{items.name}</b>
                <p>{items.price}</p>
            </div>
        )
    })

    return(
        <div className="home">
        {props.userReducer.userType? null : <h4 style={{color: "red"}}>Login To Add Product Into The Cart</h4>}
            <h2><hr />MOST POPULAR IN APRIL 2019<hr /></h2>
            <div className="products">
                {products.allProducts.length > 0? product : <h2 className="loading">Loading...</h2>}
            </div>
        </div>
    )
}

// Map State To Props
const mapStateToProps = (state) => {
    return state
  }
  

export default connect(mapStateToProps)(Home);