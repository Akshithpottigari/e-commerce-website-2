import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Cards from './Cards'
import Nav from './Nav'
import Header from './Header'
import Heading from './Heading.js'


export default function Jewelery() {
// const url = 'https://fakestoreapi.com/products/category/jewelery'
  return (
    <>
    <Header />
    <Nav />
    <Heading props={{title: 'All in Jewelery'}} />
    <Cards props='https://fakestoreapi.com/products/category/jewelery' />
    </>
  )
}
