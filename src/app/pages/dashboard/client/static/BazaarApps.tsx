import clsx from 'clsx'
import React, {useState} from 'react'
import {Input, KTSVG} from 'sr/helpers'
import CardWidget11 from 'sr/partials/widgets/widgets-components/cards/CardWidget12'

type Props = {}

export default function BazaarApps({}: Props) {
  // url
  // redux
  // state
  const [tab, setTab] = useState('all')
  // function
  // useefects
  return (
    <>
      <section>
        <div className='bazaar container'>
          <div className='header pt-40 d-flex justify-content-between'>
            <div className='tab_section hx-56 w-100'>
              <ul className='d-flex p-16'>
                <li
                  onClick={() => setTab('all')}
                  className={`p-15 cursor mr-32 fonts-500 font-16 ${
                    tab === 'all' ? 'active text-primary' : ''
                  }`}
                >
                  All
                </li>
                <li
                  onClick={() => setTab('xtraction')}
                  className={`${
                    tab === 'xtraction' ? 'active text-primary' : ''
                  } p-15 cursor mr-32 fonts-400 font-16 `}
                >
                  Xtraction
                </li>
                <li
                  onClick={() => setTab('compare')}
                  className={`${
                    tab === 'compare' ? 'active text-primary' : ''
                  } p-15 cursor mr-32 fonts-400 font-16 `}
                >
                  Compare
                </li>
                <li
                  onClick={() => setTab('classification')}
                  className={`${
                    tab === 'classification' ? 'active text-primary' : ''
                  } p-15 cursor mr-32 fonts-400 font-16 `}
                >
                  Classification
                </li>
                <li
                  onClick={() => setTab('other')}
                  className={`${
                    tab === 'other' ? 'active text-primary' : ''
                  } p-15 cursor mr-32 fonts-400 font-16 `}
                >
                  Other
                </li>
              </ul>
            </div>
            <div className='search_section d-flex px-18 radius-12'>
              <KTSVG className='mr-16 hx-56' path={'/media/icons/duotone/general/search.svg'} />
              <div className='m-auto'>
                <Input
                  inputClass='bg-transparent '
                  type={'text'}
                  placeholder={'Search Bazaar Application'}
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
          <div className='list_section pt-42 '>
            <div className='row'>
              <div className='col-md-3 col-sm-2 mb-30'>
                <CardWidget11 />
              </div>
              <div className='col-md-3 col-sm-2 mb-30'>
                <CardWidget11 />
              </div>
              <div className='col-md-3 col-sm-2 mb-30'>
                <CardWidget11 />
              </div>
              <div className='col-md-3 col-sm-2 mb-30'>
                <CardWidget11 />
              </div>
              <div className='col-md-3 col-sm-2 mb-30'>
                <CardWidget11 />
              </div>
              <div className='col-md-3 col-sm-2 mb-30'>
                <CardWidget11 />
              </div>
              <div className='col-md-3 col-sm-2 mb-30'>
                <CardWidget11 />
              </div>
              <div className='col-md-3 col-sm-2 mb-30'>
                <CardWidget11 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
