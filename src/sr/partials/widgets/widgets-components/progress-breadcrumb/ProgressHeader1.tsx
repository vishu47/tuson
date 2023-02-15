import clsx from 'clsx'
import React, {useContext, useEffect} from 'react'
import {useOutletContext} from 'react-router-dom'
import {KTSVG} from 'sr/helpers'
import {usePageData} from 'sr/layout/master-layout'

export default function ProgressHeader1() {
  const {breadCrumbState, setBreadCrumbState} = usePageData()
  useEffect(() => {
    setBreadCrumbState(false)
  }, [setBreadCrumbState])

  return (
    <>
      <div className='progress_header_wrapper bg_primary p-0 hx-68'>
        <div className='container-lg '>
          <div className='element bg_primary'>
            <KTSVG
              path={'/media/icons/duotone/general/active-tick.svg'}
              svgClassName={'text-white fonts-400 font-14'}
            />
            <p className='text-white font-14'>Upload File</p>
            <span className='line'></span>
            <KTSVG
              path={`/media/icons/duotone/general/${
                breadCrumbState ? 'active-tick' : 'disable-circle'
              }.svg`}
              svgClassName={clsx(breadCrumbState && 'text-white fonts-400 font-14')}
            />
            <p className={clsx('fonts-40 font-14 text-white')}>Extracted Output</p>
          </div>
        </div>
      </div>
    </>
  )
}
