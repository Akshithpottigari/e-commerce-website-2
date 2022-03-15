import {react, useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'


export default function Cards(props) {
        const [products, setProducts] = useState([])
    useEffect(()=>{
        fakeStore()
    }, [])
    const fakeStore = async () =>{
        const response = await fetch(props.props)
        const jsonData = await response.json()
        setProducts(jsonData)
    }
    return (
        <div className="cards-container">
        {products.map((product) => {
            return(
            
                <div class="Card">
                    <img src={product.image}></img>
                    <div class="product-details">
                        <div class="product-title">{product.title}</div>
                        <div class="product-flex">

                        <div class="product-price">${product.price}</div>
                        <div class="product-rating">{product.rating.rate}</div>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    )
}
