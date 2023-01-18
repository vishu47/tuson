import clsx from 'clsx'
import {useLayout} from 'sr/layout/master-layout'

const Footer = () => {
  const {classes} = useLayout()
  return (
    <div className={'footer py-4 d-flex flex-lg-column layout_footer'} id=''>
      <div
        className={clsx(
          'd-flex flex-column flex-md-row align-items-center justify-content-between'
        )}
      >
        <div className='left d-flex pl-22'>
          <div className='font-14 fonts-500 px-4'>Privacy Policy</div>
          <div className='font-14 fonts-500 px-4'>License</div>
          <div className='font-14 fonts-500 px-4'>API</div>
          <div className='font-14 fonts-500 px-4'>Help Center</div>
        </div>
        <div className='text_secondary font-14 fonts-500 px-4'>
          <span className=' me-1'>{new Date().getFullYear()}&copy;</span>
          All rights reserved
        </div>
      </div>
    </div>
  )
}

export {Footer}
