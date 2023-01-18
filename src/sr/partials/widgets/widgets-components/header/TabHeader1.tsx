import React, {useState} from 'react'
import {Input, KTSVG} from 'sr/helpers'

type Props = {tab: string; setTab: any}

export default function TabHeader1({setTab, tab}: Props) {
  // url
  // redux
  // state
  // function
  // useefects
  return (
    <div>
      <div className='header pt-40 d-flex justify-content-between'>
        <div className='tab_section hx-56 w-100'>
          <ul className='d-flex p-16'>
            <li
              onClick={() => setTab('infoxapis')}
              className={`p-15 cursor mr-32 fonts-500 font-16 ${
                tab === 'infoxapis' ? 'active text-primary' : ''
              }`}
            >
              InfoX API's
            </li>
            <li
              onClick={() => setTab('imageapis')}
              className={`${
                tab === 'imageapis' ? 'active text-primary' : ''
              } p-15 cursor mr-32 fonts-400 font-16 `}
            >
              Image API's
            </li>
          </ul>
        </div>
        <div className='search_section d-flex px-18 radius-12 bg_secondary_35'>
          <KTSVG className='hx-56' path={'/media/icons/duotone/general/search.svg'} />
          {/* <div className='m-auto'>
            <Input
              inputClass='bg-transparent '
              type={'text'}
              placeholder={'Search Bazaar Application'}
              onChange={() => {}}
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}
