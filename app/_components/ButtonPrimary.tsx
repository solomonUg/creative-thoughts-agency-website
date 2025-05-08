import React from 'react'

function ButtonPrimary({children}: { children: React.ReactNode }) {
  return (
    <button className="bg-btn  text-gray-50 p-4 rounded-sm  min-w-30 font-semibold cursor-pointer hover:bg-blue-700">
              {children}
    </button>
  )
}

export default ButtonPrimary