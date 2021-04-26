import React from 'react'

export default function AverageHashrateSelect(props: any) {

  const options = [1, 3, 6, 12, 24];



  return (
    <div>
      <select value={props.currentOption} onChange={e => props.changeOption(e.target.value)}>
        {options.map(option => {
        return <option key={option} value={option}>{option} Hour</option>
        })}
      </select>
    </div>
  )
}
