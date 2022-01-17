import React from "react"
import classNames from 'classnames'

const Moon = ({ size, color, className }) => {
  return(
    <svg style={{ 
        color: `${color}`, 
        width: size ? size : '30px', 
        height: size ? size : '30px'
      }} className={ classNames( 'icon-moon', className )}
      viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z"/>
    </svg>
  )
}

export default Moon
