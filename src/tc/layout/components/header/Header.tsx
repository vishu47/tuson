import {FC} from 'react'
import {MenuInner} from './MenuInner'

const Header: FC = () => {
  return (
    <div id='hr_header_menu '>
      <div className='d-flex justify-content-center align-items-center gap-2 h-100'>
        <MenuInner />
      </div>
    </div>
  )
}

export {Header}
