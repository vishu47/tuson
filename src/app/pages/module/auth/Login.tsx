import React, {useState} from 'react'
import {Spinner} from 'react-bootstrap'
import {Button, Input, toAbsoluteUrl} from 'sr/helpers'
import {OnlyNumber} from 'sr/helpers/constants/Regex.Constants'
import {
  LoginPassword,
  LoginUserName,
  LoginUserNameLength,
} from 'sr/helpers/constants/ValidationConstatnt'
import Slider2 from 'sr/partials/widgets/widgets-components/sliders/Slider2'
import {useAuth} from './core/Auth'

export default function AuthPage() {
  const {setCurrentUser} = useAuth()
  const [username, setUsername] = useState<undefined | string>(undefined)
  const [password, setPassword] = useState<undefined | any>(undefined)
  const [error, setError] = useState<null | any>({username, password})
  const LoginAction = (e: any) => {
    e.preventDefault()
    console.log(error, error.username, error.password, password, username)
    setError({})
    if (username === undefined && password === undefined) {
      setError({
        username: LoginUserName,
        password: LoginPassword,
      })
    } else if (username === undefined) {
      setError({
        username: LoginUserName,
      })
    } else if (password === undefined) {
      setError({
        password: LoginPassword,
      })
    }
    if (username !== undefined) {
      if (OnlyNumber.test(username) === false || username.length !== 7) {
        setError({
          username: LoginUserNameLength,
        })
      }
    }
    // setCurrentUser({id: 888})
  }
  return (
    <>
      <section>
        <div className='container-fluid uw_011'>
          <div className='row min-h-screen'>
            {/* <div className='col-md-6 auth_left bg-uw-green d-flex justify-content-start flex-column align-items-center min-h-screen h-100 p-0'> */}
            <div className='col-md-6 auth_left p-0'>
              <Slider2 />
              {/* <div className='w-75 text-center mt-5'> */}
              {/* <h1 className='fw-bold'>Swoosh</h1>
                <p className='pt-4 font text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur delectus
                  consequatur exercitationem ullam molestiae a eos in harum dolore!
                </p> */}
              {/* </div> */}
            </div>
            <div className='col-md-6 p-4 auth_right'>
              <form className='h-100'>
                <div className='d-flex justify-content-center flex-column align-items-center h-100'>
                  <div className='logo mt-4'>
                    {/* <img width={150} src={toAbsoluteUrl('/media/logos/logo2.png')} alt='' /> */}
                  </div>
                  <div className='fields w-50 m-auto d-flex flex-column gap-4 justify-content-center align-items-center'>
                    <h2>Sign In</h2>
                    <Input
                      type='email'
                      label={'Bank Id'}
                      placeholder={'Bank Id...'}
                      onChange={(e: any) => {
                        setUsername(e.target.value)
                      }}
                      inputClass='w-100'
                      error={error.username}
                    />
                    <Input
                      type='password'
                      label={'Password'}
                      placeholder={'Enter Password...'}
                      onChange={(e: any) => {
                        setPassword(e.target.value)
                      }}
                      inputClass='w-100'
                      error={error.password}
                    />
                    <Button
                      type={'ui-button-2'}
                      // onClick={() => {
                      //   OpenToggleSidebar()
                      // }}
                      onClick={(e: any) => {
                        LoginAction(e)
                      }}
                      className='font-14 fonts-500 px-20 py-12 bg_primary'
                    >
                      Login Now
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
