import React from 'react';
import Nav from './Nav'
import Header from './Header'
import Hero from './Hero'
import Cards from './Cards' 
import Footer from './Footer';

export default function Homepage(){
    return (
        <div>
            <Header />
            <Nav />
            <Hero />
            <Cards props="https://fakestoreapi.com/products" />
            <Footer />
        </div>
    )
}