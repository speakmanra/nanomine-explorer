import React from 'react'
import { useCountUp } from 'react-countup';

export default function AnimatedValue(props: any) {
  const { countUp } = useCountUp({ end: props.value, decimals: props.decimals });
  return (
    <div>
      <p>{countUp}</p>
    </div>
  )
}
