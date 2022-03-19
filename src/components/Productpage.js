import {React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export default function Productpage() {
    const [productInfo, setproductInfo] = useState([])
    useEffect(()=>{
        fakeStore()
    }, [])
    const {id} =  {...useParams()}
    console.log(id)
    const fakeStore = async () =>{
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const jsonData = await response.json()
    setproductInfo(jsonData)
    console.log(jsonData)
    console.log(productInfo)
    
}

  
  return (
  <div>
    {productInfo}
  </div>);
}
