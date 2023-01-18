/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import {ThemeModeSwitcher} from 'sr/partials/themes/theme-mode/ThemeModeSwitcher'
import {Header} from './Header'
import {Topbar} from './Topbar'

export function HeaderWrapper() {
  return (
    <div id='kt_header' className={clsx('header', 'align-items-stretch', 'p-0', 'bg_secondary_75')}>
      {/* begin::Container */}
      <div className={clsx('d-flex align-items-stretch justify-content-between container')}>
        {/* begin::Wrapper */}
        <div className={'d-flex align-items-stretch justify-content-between flex-lg-grow-1 py-3'}>
          <div className='d-flex align-items-stretch' id='kt_header_nav'>
            <Header />
          </div>

          <Topbar />
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Container */}
    </div>
  )
}
