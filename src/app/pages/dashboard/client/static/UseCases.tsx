import React from 'react'
import {Button, DropDown, Input, UseCasesImageBanner} from 'sr/helpers'
import {UseCaseSearchIcon} from 'sr/helpers/constants/IconConstants'
import CardWidget13 from 'sr/partials/widgets/widgets-components/cards/CardWidget13'
import NavigationHeader from 'sr/partials/widgets/widgets-components/header/NavigationHeader'

type Props = {}

export default function UseCases({}: Props) {
  const list = ['Help Center', 'Text Related Capabilities', 'Why Swoosh']
  return (
    <>
      <div className='usecases'>
        <div className=' bg_secondary_75 hx-40 m-auto'>
          <div className='container h-100 d-flex align-items-center'>
            <div className='navigation_header'>
              <NavigationHeader list={list} />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='position-relative'>
            <div
              className='banner_section radius-12 d-flex justify-content-center align-items-center mt-20 hx-250  bg_primary'
              style={{backgroundImage: `url(${UseCasesImageBanner})`}}
            >
              <div className='bannerimage'>
                <p className='text-white font-30 fonts-600 text-center'>
                  We pioneered to solve the business problems
                </p>
                <p className='text-white font-16 fonts-400 pt-12 text-center'>
                  We pioneered to solve the business problems
                </p>
              </div>
            </div>
            <div className='search_section radius-31 hx-62 position-absolute bg-white'>
              <div className='row h-100'>
                <div className='col-md-7 input_section d-flex align-items-center h-100 m-auto px-44'>
                  <Input
                    inputClass='bg-transparent w-100 text_black_70 font-12 fonts-500'
                    type={'text'}
                    placeholder={'Ask any use case or Enter a keyword'}
                    onChange={() => {}}
                  />
                </div>
                <div className='col-md-5 p-0'>
                  <div className='row p-0 h-100'>
                    <div className='col-md-6 d-flex align-items-center'>
                      <DropDown className={'bg-transparent w-100 text_black_70 font-12 fonts-500'}>
                        <option value='' selected>
                          Category
                        </option>
                      </DropDown>
                    </div>
                    <div className='col-md-6 d-flex align-items-center justify-content-end pr-37'>
                      <Button
                        type={'ui-button-2'}
                        // onClick={() => {
                        //   OpenToggleSidebar()
                        // }}
                        onClick={() => {}}
                        className='font-14 fonts-500 bg_primary2 hx-46'
                        icon={UseCaseSearchIcon}
                      >
                        Search
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className='font-12 pt-33 text-center'>
            You search using works like <span className='fonts-600'>Extract</span> or{' '}
            <span className='fonts-600'>Comparasion</span> etc
          </p>
          <div className='card_section'>
            <CardWidget13 />
          </div>
        </div>
      </div>
    </>
  )
}
