import React from 'react'

const Header = () => {
  return (
    <div className='header' 
        style={{
            height: '8vh',
            width:'65vw',
            backgroundColor: 'white',
            marginLeft: '35.5vh'
        }}
    >
        <h1 style={{
            color: 'blue',
            fontFamily: 'Monospace',
            fontSize: '40px',
            fontWeight: 'bold',
            textAlign: 'center',
        }}>
            Time Clock
        </h1>
    </div>
  )
}

export default Header