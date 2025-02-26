import React from 'react'

function Button(props) {
  return (
    <button className="bg-[#ec806f] text-white px-6 py-2 rounded hover:bg-gray-900 duration-500">
            {props.name}
          </button>
  )
}

export default Button

