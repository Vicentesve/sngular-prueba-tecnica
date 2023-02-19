import React, { useState } from 'react'
import Result from './Result'

const VisualComponent = () => {
  const [n, setN] = useState(1)
  const [error, setError] = useState('')
  const [modal, showModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      if (parseInt(n) === 0 || parseInt(n) > 10) {
        setError('Ingresa un valor mayor a 0 y menor a 11')
        return
      }

      setError('')
      showModal(true)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {modal ? <Result n={n} showModal={showModal} /> : null}
      <div className="flex flex-col items-center justify-center h-screen space-y-10">
        <h1 className="flex items-center text-5xl font-extrabold ">
          Prueba Técnica
          <span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2">
            Sngular
          </span>
        </h1>

        <img className="w-[600px]" src="/formula.png" alt="" />

        <form className="w-[400px] text-center" onSubmit={handleSubmit}>
          <h2 className="font-semibold text-gray-500 text-2xl">
            Ingrese el término <span>n</span>
          </h2>

          <div className="input-container space-y-2 mt-5 relative w-full ">
            <input
              type="text"
              id="n"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
              focus:border-blue-500 block w-full p-2.5  "
              placeholder="n"
              value={n}
              onChange={(e) => setN(e.target.value.replace(/[^0-9]/g, ''))}
            />

            <p className="text-center w-full absolute text-sm text-red-500 italic whitespace-nowrap top-10">
              {error}
            </p>
          </div>

          <button
            className="text-white mt-10 w-full bg-blue-700 hover:bg-blue-800 
          focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            type="submit"
          >
            Calcular
          </button>
        </form>
      </div>
    </>
  )
}

export default VisualComponent
