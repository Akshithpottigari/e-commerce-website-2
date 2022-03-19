import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Cards from './Cards'
import Nav from './Nav'
import Header from './Header'
import Heading from './Heading.js'
import Footer from './Footer.js'

export default function Mensclothing() {
// const url = 'https://fakestoreapi.com/products/category/jewelery'

  return (
    <>
    <Header />
    <Nav />
    <Heading props={{title: "All in Men's Clothing"}} />
    <Cards props="https://fakestoreapi.com/products/category/men's%20clothing" />
    <Footer />
    </>
  )
}
