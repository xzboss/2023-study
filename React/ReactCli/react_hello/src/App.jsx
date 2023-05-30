import React, { useState, useEffect } from 'react'
export default function App () {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('@@@')
  }, [count])
  const handle = () => {
    setCount(9)
  }
  return (
    <div>
      <button onClick={handle}>target</button>
    </div>
  )
}
