import React from 'react'
import Para from './Para'

function Comment() {
  return (
    <div style={{
        display:"flex",gap:"40px",justifyContent:"center",
        flexWrap:"wrap"
    }}>
        <Para/>
        <Para/>
        <Para/>
        <Para/>
        <Para/>
        <Para/>
    </div>
  )
}

export default Comment