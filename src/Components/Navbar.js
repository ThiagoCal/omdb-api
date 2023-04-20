import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{backgroundColor:"rgb(52,58,64)", display:"flex", color:"white", height:"4em", alignItems:"center", fontSize:"25px", marginBottom:"2em"}}>
      
      <div className='container container-nav'>
        <div style={{textAlign:'left'}}>
          <span><Link className="brand-logo" to={`/`}>Movies&Series-DB</Link></span>
        </div>
        <div>
          {/* <FontAwesomeIcon icon={faPenNib} /> */}
        </div>
      </div>
    </nav>
  )
}
