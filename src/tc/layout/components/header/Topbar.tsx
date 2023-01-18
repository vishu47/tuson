import {FC} from 'react'
import clsx from 'clsx'
import {MenuItem} from './MenuItem'
import {KTSVG, toAbsoluteUrl} from 'tc/helpers'

// const itemClass = 'ms-1 ms-lg-3'
// const btnClass = 'btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
// const userAvatarClass = 'symbol-30px symbol-md-40px'

const Topbar: FC = () => {
  // const {config} = useLayout()

  return (
    <div className='menu-item d-flex justify-content-center align-items-center gap-2 h-100'>
      {/* <div className={clsx('menu-link topbar px-2 rounded d-flex align-items-center', itemClass)}>
        <div className='menu-title'>
          <ThemeModeSwitcher toggleBtnClass={'m-2'} />
        </div>
      </div> */}
      <small className='d-flex px-2'>
        <KTSVG
          path={'/media/icons/duotone/general/clock.svg'}
          className='d-flex me-2 align-items-center text-primary'
        />
        <div className='font-12 fonts-400'>Auto Save in 20 sec</div>
      </small>
      <div
        className={clsx('menu-link px-2 d-flex align-items-center')}
        id='kt_header_user_menu_toggle'
      >
        {/* begin::Toggle */}
        <div className={clsx('menu-title cursor-pointer symbol')}>
          <img
            src={toAbsoluteUrl('/media/img/avatar.jpg')}
            className='rounded-circle'
            alt='avatar'
            width={'40px'}
            height={'40px'}
          />
        </div>
      </div>
      <div className={clsx('menu-link d-flex align-items-center')}>
        {/* begin::Toggle */}
        <div className={clsx('menu-title cursor-pointer symbol header iconBorder rounded')}>
          <span className='menu-icon '>
            <KTSVG path={'/media/icons/duotone/general/power.svg'} className='d-flex p-2' />
          </span>
        </div>
      </div>
    </div>
  )
}
export {Topbar}
