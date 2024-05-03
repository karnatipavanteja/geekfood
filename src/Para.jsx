import React from 'react'

function Para() {
  return (
    <div style={{
        width:"400px",
        padding:"10px",
        boxShadow:"0px 0px 5px 0px black"
    }}>

        <p style={{
            backgroundColor:"lightgray",
            padding:"10px",
            boxShadow:"0px 0px 5px 0px black"
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.
        </p>
        <div style={{
            display:"flex",
            alignItems:"center",
            padding:"20px"
        }}>
            <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt=""
            style={{
                width:"40px",height:"50px",borderRadius:"50%"
            }} />
            <div style={{
                padding:"20px"
            }}>
                <h4>Gladis Lennon</h4>
                <h4>Head of SEO</h4>
            </div>
        </div>
    </div>
  )
}

export default Para