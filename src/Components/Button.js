import React from 'react'

const Button = () => {
  const filterArray =(e)=>{
      
  }
  return (
    <div className='btnn'>
          <button  className='btn btn-primary'>All</button>
           <button onClick={filterArray} className='btn btn-primary'>Breakfast</button>
           <button className='btn btn-primary'>Lunch</button>
          <button className='btn btn-primary'>Dinner</button>
           </div>
  )
}

export default Button
