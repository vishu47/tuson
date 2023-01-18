import {FC, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Button, KTSVG} from 'tc/helpers'
import {MenuItem} from '../MenuItem'

const MainHeader: FC = () => {
  // provider
  // const {currentUser} = useAuth()

  // url
  const navigate = useNavigate()
  // redux
  const dispatch = useDispatch()
  // states
  const [loginPopUp, setLoginPopUp] = useState<boolean | null>(true)
  const [bankId, setBankId] = useState<any | null>('')
  const [password, setPassword] = useState<any | null>('')
  // functions
  const LoginUserAction = () => {
    const obj = {bankId, password}
  }
  const CloseToggleSidebar = () => {
    setLoginPopUp(false)
  }
  const OpenToggleSidebar = () => {
    setLoginPopUp(true)
  }
  // useEffects
  return (
    <div id='hr_header_menu' className='w-100'>
      <div className='d-flex justify-content-between align-items-center gap-2'>
        <div className='logo'>
          <MenuItem className='wx-150' to='/dashboard' hasPadding={false} title={'Tuson'} />
        </div>
        <div className='middle d-flex justify-content-between align-items-center flex-row gap-22'>
          <MenuItem to={'/dashboard'} titleClass={'font-16 fonts-500'} title={'About'} />
        </div>
      </div>
    </div>
  )
}

export {MainHeader}
