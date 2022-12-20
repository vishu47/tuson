import React, {useState} from 'react'
import {DropDown, Input, KTSVG} from 'sr/helpers'
import {TextArea} from 'sr/helpers/ui-components/TextArea'

type Props = {whySwoosh: any}

export default function CardWidget7({whySwoosh}: Props) {
  console.log(whySwoosh)
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
        <h5>Why Swoosh Section with Cards Details</h5>
        <div className='d-flex gap-4'>
          <div className='radius-8 p-3 mt-2 w-100 bg_secondary_85'>
            <div className='d-flex justify-content-between flex-row align-items-center'>
              <h6 className='fonts-600 '>Header Section</h6>
              <div className='d-flex gap-3 '>
                <KTSVG className='cursor' path={'/media/icons/duotone/general/delete.svg'} />
                <KTSVG className='cursor' path={'/media/icons/duotone/abstract/edit.svg'} />
              </div>
            </div>
            <h6 className='pt-2'>Title : About</h6>
            <h6 className='pt-2'>
              Description : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
              consequatur. Porro nulla expedita ratione dicta ad voluptates facere dignissimos est.
            </h6>
          </div>
        </div>
        <div className='d-flex gap-4 mt-20'>
          <div className='radius-8 p-3 w-50 bg_secondary_85'>
            <div className='d-flex justify-content-between flex-row align-items-center'>
              <h6 className='fonts-600 '>Card 1</h6>
              <div className='d-flex gap-3 '>
                <KTSVG className='cursor' path={'/media/icons/duotone/general/delete.svg'} />
                <KTSVG className='cursor' path={'/media/icons/duotone/abstract/edit.svg'} />
              </div>
            </div>
            <h6 className='pt-2'>Title : About</h6>
            <h6 className='pt-2'>
              Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, magni.
            </h6>
          </div>
          <div className='radius-8 p-3 w-50 bg_secondary_85'>
            <div className='d-flex justify-content-between flex-row align-items-center'>
              <h6 className='fonts-600 '>Card 1</h6>
              <div className='d-flex gap-3 '>
                <KTSVG className='cursor' path={'/media/icons/duotone/general/delete.svg'} />
                <KTSVG className='cursor' path={'/media/icons/duotone/abstract/edit.svg'} />
              </div>
            </div>
            <h6 className='pt-2'>Title : About</h6>
            <h6 className='pt-2'>
              Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, magni.
            </h6>
          </div>
        </div>
      </div>
    </>
  )
}
