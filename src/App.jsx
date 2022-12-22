import './style.css'
import React from 'react'

const apiUrl = 'https://dog.ceo/api/breeds/image/random'

export default function App() {
  return (
    <main>
      <h1>Go fetch!</h1>
      <img width={300} src={''} />
    </main>
  )
}
