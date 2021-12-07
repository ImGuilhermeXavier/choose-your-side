import React from 'react'
import Back from '../../components/Back/Back'

function NotFound() {
  return (
    <>
      <Back to="/" type="black-type" />
      <div className="not-found">
        Error: 404 <br /> Page not found
      </div>
    </>
  )
}

export default NotFound
