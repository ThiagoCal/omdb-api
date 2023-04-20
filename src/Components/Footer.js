import React from 'react'

export default function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(52,58,64)", display:"flex", color:"white", height:"2em", alignItems:"center", fontSize:"15px", marginTop:"2em"}}>
      
      <div className='container footer'>
        <div>
          <span>Using <i className='fab fa-react'></i>  React JS & Redux JS integrated with external movies data APIOMDB</span>
        </div>
      </div>
    </footer>
  )
}
