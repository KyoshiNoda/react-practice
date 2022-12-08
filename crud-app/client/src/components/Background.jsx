import React from 'react'

function Background(props) {
  return (
    <div className="flex flex-col justify-center h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        {props.children}
    </div>
  )
}

export default Background