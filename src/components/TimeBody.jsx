import React from 'react'

const TimeBody = () => {
    var month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    var date = {
        day: new Date().getDay(),
        month : month[new Date().getMonth()],
        year: new Date().getFullYear(),
    }
    var hour = new Date().getHours().toLocaleString()
    var minute = new Date().getMinutes().toLocaleString()
    var second = new Date().getSeconds().toString()
  return (
    <div>
        <p style={{color:'white', fontWeight:'bold', fontSize:'xx-large', fontFamily:'monospace', textAlign:'center'}}>
            Today's :  {date.day} / {date.month} / {date.year}
        </p>
        
        <p style={{height: '20vh', width: '80vw', backgroundColor:'white', marginLeft:'10vw', borderRadius: '20px' , textAlign:'center' , fontSize: '70px', fontFamily:'monospace', color:'blue', fontWeight:'bold'}}><span>{hour}</span>:<span>{minute}</span>:<span>{second}</span></p>
    </div>
  )
}

export default TimeBody