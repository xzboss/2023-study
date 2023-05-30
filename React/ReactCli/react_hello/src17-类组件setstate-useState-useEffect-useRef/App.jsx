import React, { useState, useEffect, useRef, Fragment } from 'react'
import { root } from './index'
export default function App () {
  const [count, setCount] = useState(0)
  const node = useRef()
  const add = () => {
    /* 第一种 */
    //setCount(count + 1)
    /* 第二种 */
    setCount(count => count + 1)
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  const unmount = () => {
    root.unmount()
  }
  const log = () => {
    console.log(node.current.value)
  }
  return (
    <Fragment key={1} children={<h1>hhh</h1>}>
      <h1>count: {count}</h1>
      <button onClick={add}>ADD</button>
      <button onClick={unmount}>卸载组件</button>
      <input type="text" ref={node} />
      <button onClick={log}>alert</button>
    </Fragment>

  )
}
