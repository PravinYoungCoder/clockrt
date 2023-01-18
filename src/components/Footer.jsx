import React from 'react'

const Footer = () => {
    var year = new Date().getFullYear();
  return (
    <div>
        <p style={{
            textAlign: 'center',
            color:'black',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            fontSize: 'large',
            marginTop: '40vh'

        }}>Copyright @ {year} Pravin R</p>
    </div>
  )
}

export default Footer