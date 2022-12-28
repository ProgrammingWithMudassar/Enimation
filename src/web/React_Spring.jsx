import React from 'react'
import { useSpring, animated } from '@react-spring/web'

const React_Spring = () => {

  //Spring animation
  const [springs, api] = useSprings(
    2,
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  )


  return (
    <div>
      {springs.map(props => (
        <animated.div style={props}>Hello World</animated.div>
      ))}
    </div>
  )
}


export default React_Spring