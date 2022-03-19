import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Cards from './Cards'
import Nav from './Nav'
import Header from './Header'
import Heading from './Heading.js'
import Footer from './Footer'

export default function Womensclothing() {
// const url = 'https://fakestoreapi.com/products/category/jewelery'

  return (
    <>
    <Header />
    <Nav />
    <Heading props={{title: "All in Women's Clothing"}} />
    <Cards props="https://fakestoreapi.com/products/category/women's%20clothing" />
    <Footer />
    </>
  )
}
