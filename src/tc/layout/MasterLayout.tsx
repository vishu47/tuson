import clsx from 'clsx'
import {useEffect, useState} from 'react'
import {Outlet} from 'react-router-dom'
import {ThemeContext} from 'tc/partials/partials'
import {MainFooter} from './components/footer/MainFooter'
import {MainHeaderWrapper} from './components/header/main-header/MainHeaderWrapper'
import {usePageData} from './master-layout'

const MasterLayout = () => {
  // context
  const {pageHeader, setPageHeader} = usePageData()
  // urls
  // states
  const [theme, setTheme] = useState('light')

  useEffect(() => {}, [])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <>
        <div data-testid='master' className={`theme-${theme}`}>
          <div className={clsx('d-flex flex-column flex-root main-page')}>
            {/* begin::Page */}
            <div className='page d-flex flex-row flex-column-fluid'>
              {/* <div className={clsx('d-flex flex-column p-4 pt-4 aside_layout_main')}> */}
              {/* <AsideDefault /> */}
              {/* </div> */}
              {/* begin::Wrapper */}
              <div className='d-flex flex-column w-100'>
                <div className='master_layout_main'>
                  {<MainHeaderWrapper />}
                  {/* main layout header */}
                </div>
                {/* begin::Content */}
                <div className='page_background'>
                  <Outlet />
                </div>
                {/* end::Content */}
                <div className='master_layout_main'>{<MainFooter />}</div>
              </div>
              {/* end::Wrapper */}
            </div>
            {/* end::Page */}
          </div>
        </div>
      </>
    </ThemeContext.Provider>
  )
}

export {MasterLayout}
