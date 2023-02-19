import React from 'react'
import Serie from './../utils/functions'
const Result = ({ n, showModal }) => {
  return (
    <div className="fixed grid place-items-center top-0 left-0 h-screen bg-[rgba(0,0,0,0.5)] w-full z-[100]">
      <div className="bg-white py-5 px-10 rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold">
          El resultado es{' '}
          <span
            data-testid="result-serie"
            className="text-green-500 underline text-3xl"
          >
            {Serie(parseInt(n))}
          </span>
        </h2>

        <button
          className="text-white mt-10 w-full bg-blue-700 hover:bg-blue-800 
          focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={() => showModal(false)}
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default Result
