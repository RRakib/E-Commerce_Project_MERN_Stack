// Imports
import axios from "axios"
import React , {useState , useEffect} from "react"

const Home = () => {
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
            <div key={items._id}>
                <img src={items.productImage} alt="product" />
                <b>{items.name}</b>
                <p>{items.price}</p>
            </div>
        )
    })
    console.log(products)
    return(
        <div>
            <h1>E-Commerce</h1>
            {product}
        </div>
    )
}


export default Home;