import React from 'react'
import DbConnection from './db/DbConnection'

export default function Login() {
  return (
    <div>
        <DbConnection />
        <form>
        <input type="text" placeholder="Enter your email"></input>
        <br />
        <input type="password" placeholder="Enter your password"></input>
        <br />
        <button type='submit'>Login</button>
        </form>
    </div>
  )
}
