import React from 'react'

function Background(props) {
  return (
    <div className="flex flex-col justify-center bg-gradient-to-r from-red-500 to-blue-500 h-screen w-screen">
        {props.children}
    </div>
  )
}

export default Background