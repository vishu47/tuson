import React, {useState} from 'react'
import {DropDown, Input, KTSVG} from 'sr/helpers'
import {KTIMG} from 'sr/helpers/ui-components/KTIMG'
import {TextArea} from 'sr/helpers/ui-components/TextArea'

// type Props = {addSections: (e: any) => {}}

export default function CardWidget6() {
  // url
  // redux
  // states
  const [section, setSection] = useState('')
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  // function
  const AddSections = () => {}

  // useeffects
  return (
    <>
      <div className='py-20 border_secondary mt-3 radius-8 p-4 gap-3'>
        <h5>Banner Section</h5>
        <div className='d-flex gap-4'>
          <div className='radius-8 p-3 mt-2 w-100 bg_secondary_85'>
            <div className='d-flex justify-content-between flex-row align-items-center'>
              <h6 className='fonts-600 '>Item 1</h6>
              <div className='d-flex gap-3 '>
                <KTSVG className='cursor' path={'/media/icons/duotone/general/delete.svg'} />
                <KTSVG className='cursor' path={'/media/icons/duotone/abstract/edit.svg'} />
              </div>
            </div>
            <h6 className='pt-2'>Image Name: Banner Image.png</h6>
            <h6 className='pt-2 d-flex justify-content-between align-items-center'>
              Image:
              <KTIMG
                imgClassName={'hx-50 wx-100 radius-8'}
                path={'/media/img/stock/banner.png'}
                alt={'llk'}
              />
            </h6>
          </div>
        </div>
      </div>
    </>
  )
}
