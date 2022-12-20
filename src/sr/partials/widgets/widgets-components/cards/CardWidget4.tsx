import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import {Button, CheckBox, DropDown, Input} from 'sr/helpers'
import {Missing} from 'sr/helpers/alerts/CommonAlerts'
import {TextArea} from 'sr/helpers/ui-components/TextArea'
import {
  ActionCreateMenu,
  ActionCreatePage,
  ActionEditMenuItem,
  ActionListMenu,
  ActionMenuTypeList,
} from 'sr/redux/admin/actions/HomepageAction'
import {useAdminSelector} from 'sr/redux/reducers'

// type Props = {list: any}

export default function CardWidget4() {
  // url
  // redux
  const dispatch = useDispatch()
  const {homepage} = useAdminSelector()

  // states
  const [editId, setEditId] = useState<number>(0)
  const [id, setId] = useState<number>(0)
  const [details, setDetails] = useState<any>([])
  const [section, setSection] = useState('')
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState('')
  const [status, setStatus] = useState(true)
  // function
  const SetOption = (e: any) => {
    const index = e.target.selectedIndex
    const el = e.target.childNodes[index]
    const ids = el.getAttribute('id')
    const sections = e.target.value
    setSection(sections)
    setId(parseInt(ids))
  }
  const AddSectionsData = async (e: any) => {
    e.preventDefault()
    const obj = {
      menu_type: id,
      title,
      link,
      description,
      is_active: true,
    }
    console.log(obj, section)
    if (section === 'header') {
      if (obj.title === '' || obj.link === '') return toast.error('Menu Fields Are missing!!')
      if (editId) {
        // add id in existing object
        Object.assign(obj, {id: editId})
        await dispatch(ActionEditMenuItem(obj))
      } else {
        await dispatch(ActionCreateMenu(obj))
      }
    } else if (section === 'why_swoosh') {
      if (obj.title === '' || obj.description === '')
        return toast.error('Menu Fields Are missing!!')
      if (editId) {
        // add id in existing object
        Object.assign(obj, {id: editId})
        await dispatch(ActionEditMenuItem(obj))
      } else {
        console.log(obj)
        // await dispatch(ActionCreatePage(obj))
      }
    } else if (section === '') {
      Missing()
    } else {
      Missing()
    }
    // reset form
    setEditId(0)
    setId(0)
    setSection('')
    setTitle('')
    setLink('')
    setDescription('')
    setFile('')
    setStatus(true)
    await dispatch(ActionListMenu(obj))
  }
  const TitleInput = () => {
    return (
      <>
        {section !== '' ? (
          <Input
            label={'Add Title'}
            placeholder={'Add Title...'}
            type={'text'}
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />
        ) : (
          ''
        )}
      </>
    )
  }
  const LinkInput = () => {
    return (
      <>
        {section === 'header' ||
        section === 'footer1' ||
        section === 'footer2' ||
        section === 'why_swoosh_card' ? (
          <Input
            label={'Add Link/Route'}
            placeholder={'Add Link/Route...'}
            type={'text'}
            onChange={(e: any) => setLink(e.target.value)}
            value={link}
          />
        ) : (
          ''
        )}
      </>
    )
  }
  const ImageInput = () => {
    return (
      <>
        {section === 'banner' ? (
          <Input
            label={'Add Icon/Image'}
            placeholder={'Add Link/Route...'}
            type={'file'}
            onChange={(e: any) => setFile(e.target.value)}
            value={file}
          />
        ) : (
          ''
        )}
      </>
    )
  }
  const DescriptionInput = () => {
    return (
      <>
        {section === 'why_swoosh' ||
        section === 'why_swoosh_card' ||
        section === 'conversational_ai' ? (
          <TextArea
            label={'Add Description'}
            placeholder={'Add Description...'}
            type={'text'}
            value={description}
            onChange={(e: any) => {
              setDescription(e.target.value)
            }}
          />
        ) : (
          ''
        )}
      </>
    )
  }
  const StatusCheckbox = () => {
    return (
      <>
        <CheckBox
          type={'checkbox'}
          onChange={(e: any) => {
            if (e.target.checked) {
              setStatus(true)
            } else {
              setStatus(false)
            }
          }}
          label={'Is Active'}
          labelClass={'font-16 fonts-500'}
          inputClass={'border border-2'}
          checked={status}
        />
      </>
    )
  }

  // useeffects
  useEffect(() => {
    setDetails(homepage.itemDetails)
    if (details) {
      if (homepage.menuTypeList) {
        const cc: any = homepage.menuTypeList.find((item: any) => item.id === details.menu_type)
        if (cc) {
          setSection(cc.type_name)
          setId(cc.id)
        }
      }
      setEditId(details.id)
      setTitle(details.title)
      setLink(details.link)
    }

    dispatch(ActionMenuTypeList())
  }, [homepage.itemDetails, details, dispatch])

  return (
    <>
      <h4>Add Homepage Section</h4>
      <form
        onSubmit={(e: any) => {
          AddSectionsData(e)
        }}
        className='py-20 border_secondary mt-3 radius-8 p-4 gap-3 d-flex flex-column'
      >
        <DropDown
          name={'section'}
          onChange={(e: any) => {
            SetOption(e)
          }}
          value={section}
          label={'Select Section'}
        >
          <option value=''>{'--Choose Section-- '}</option>
          {homepage.menuTypeList.map((item: any) => {
            return (
              <>
                <option id={item.id} value={item.type_name}>
                  {item.title}
                </option>
              </>
            )
          })}
        </DropDown>
        {TitleInput()}
        {LinkInput()}
        {DescriptionInput()}
        {ImageInput()}
        {StatusCheckbox()}

        <div className='d-flex gap-2 justify-content-end'>
          <Button className='px-16 py-6 radius-8 bg_primary fonts-400'>Reset</Button>
          <Button className='px-16 py-6 radius-8 bg_primary fonts-400'>Submit</Button>
        </div>
      </form>
    </>
  )
}
