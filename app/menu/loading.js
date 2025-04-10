import { Spinner } from 'keep-react'
import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center mx-10 my-10'>
        <Spinner />
    </div>
  )
}
