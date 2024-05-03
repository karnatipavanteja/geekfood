import React from 'react'

function Matter() {
  return (
    <div style={{
        margin:"40px",
        display:"flex"
    }}>
        <div className='img' style={{
            margin:"100px 0px",
            position:"relative",
            left:"70px"
        }}>
            <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" height={800} width={600} />
        </div>
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
           background:"lightgray",
           width:"100%",
          
        
        }}>
           <div style={{
            width:"400px",
            marginLeft:"200px"
           }}>
           <h3 style={{
            fontSize:"30px"
           }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.

Get in Touch
            </p>
            <button style={{
                backgroundColor:"blue",
                color:"white",
                border:"none",
                padding:"10px",
                width:"200px",
                marginTop:"50px"
            }}>Get to touch</button>
           </div>
        </div>
    </div>
  )
}

export default Matter