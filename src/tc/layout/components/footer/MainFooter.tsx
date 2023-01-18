const MainFooter = () => {
  return (
    <div className={'main_footer container-fluid d-flex flex-lg-column '} id=''>
      <div className='container sub_main_header d-flex align-items-center justify-content-between px-80'>
        <div className='d-flex justify-content-start align-items-center'>
          <p className='pr-40 font-13 fonts-400'> &#169; Tuson Center</p>
          <p className='font-13 fonts-400'>Privacy Policy</p>
        </div>
        <div className='d-flex justify-content-end align-items-center'>
          <span className='d-flex hx-15'>
            <p className='text-uppercase me-2 font-13 fonts-400 p-0'>Powered By</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export {MainFooter}
