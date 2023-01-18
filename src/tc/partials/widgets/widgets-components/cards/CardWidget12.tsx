import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from 'sr/helpers'

type Props = {}

export default function CardWidget11({}: Props) {
  return (
    <>
      <div className='p-30 pt-10 h-100 cards radius-8'>
        <div className='tag d-flex py-2 justify-content-end'>
          <span className='font-8 text-uppercase bg_primary text-white radius-8 '>New</span>
        </div>
        <div className='title d-flex '>
          <KTSVG className='pr-12' path={'/media/icons/duotone/general/search.svg'} />
          <p className='font-16 fonts-600'>Fixed table Extraction</p>
        </div>
        <p className='font-14 fonts-500 py-20 desc'>
          Algorithms which allows to reproduce human intelligence, behaviour and conversations.
        </p>
        <div className='use '>
          <Link className='d-flex font-16 pr-12 fonts-700 text-dark' to={'#'}>
            Try This
            <KTSVG className='pl-12' path={'/media/icons/duotone/abstract/right-arrow.svg'} />
          </Link>
        </div>
      </div>
    </>
  )
}
