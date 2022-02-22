import React from 'react'

const Button = ({isActive, clicked}) => {
  return (
   <button className='btn-primary' onClick={clicked}>{isActive ? "Get Random User" : "User"}</button>
  )
}

export default Button