import React from 'react'
import {Spinner} from 'react-bootstrap'
import {Button, Input, toAbsoluteUrl} from 'sr/helpers'
import Slider2 from 'sr/partials/widgets/widgets-components/sliders/Slider2'
import {useAuth} from './core/Auth'

export default function AuthPage() {
  const {setCurrentUser} = useAuth()
  const LoginAction = (e: any) => {
    e.preventDefault()
    setCurrentUser({id: 888})
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
                      label={'Email'}
                      placeholder={'Enter Email...'}
                      onChange={() => {}}
                      inputClass='w-100'
                    />
                    <Input
                      type='password'
                      label={'Password'}
                      placeholder={'Enter Password...'}
                      onChange={() => {}}
                      inputClass='w-100'
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
