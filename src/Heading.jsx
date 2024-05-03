import React from 'react'

function Heading() {
  return (
    <div style={{
        backgroundImage:"url('https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",height:"100vh",
        display:"flex",flexDirection:"column",
       justifyContent:"center",
    alignItems:"center"
    }}>

      <div style={{
        width:"400px",textAlign:"center"
       
      }}>
      <h1 style={{
        fontSize:"50px"
      }}>Let us find your</h1>
        <h1  style={{
        fontSize:"50px",
        color:"red"
      }}>Forever Food.</h1>
        <p style={{
            fontSize:"20px"
        }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
        <button style={{
            width:"150px",padding:"10px",backgroundColor:"red",border:"none",color:"white",margin:"20px"
        }}>search now</button>
        <button  style={{
            width:"150px",padding:"10px",backgroundColor:"white",border:"none",color:"red",margin:"20px"
        }}>know more</button>
      </div>
    </div>
  )
}

export default Heading