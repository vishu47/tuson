import React from 'react'
import {Spinner} from 'react-bootstrap'
import {Button, Input, toAbsoluteUrl} from 'sr/helpers'

export default function AuthPage() {
  return (
    <>
      <section>
        <div className='container-fluid uw_011'>
          <div className='row min-h-screen'>
            <div className='col-md-6 auth_left bg-uw-green p-4 pt-5 d-flex justify-content-start flex-column align-items-center min-h-screen'>
              <div className='w-75 text-center mt-5'>
                <h1 className='fw-bold'>Seer SeeR</h1>
                <p className='pt-4 font text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur delectus
                  consequatur exercitationem ullam molestiae a eos in harum dolore!
                </p>
              </div>
            </div>
            <div className='col-md-6 p-4 auth_right'>
              <form action='' className='h-100'>
                <div className='d-flex justify-content-center flex-column align-items-center h-100'>
                  <div className='logo mt-4'>
                    <img width={150} src={toAbsoluteUrl('/media/logos/logo2.png')} alt='' />
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
                      //   icon={<Spinner animation='border' variant='success' size={'sm'} />}
                      className={'w-auto py-2 px-4 bg-uw-green signin_button'}
                      text={'Sign in'}
                    />
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
