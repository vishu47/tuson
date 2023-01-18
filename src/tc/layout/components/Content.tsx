import {FC} from 'react'
import clsx from 'clsx'
import {useLayout} from '../master-layout'
import {WithChildren} from 'tc/helpers'

const Content: FC<WithChildren> = ({children}) => {
  const {classes} = useLayout()
  // useEffect(() => {
  // We have to show toolbar only for dashboard page
  // document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
  // return () => {
  //   document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
  // }
  // }, [])
  return (
    <>
      <div id='kt_content_container' className={clsx(classes.contentContainer.join(' '))}>
        {children}
      </div>
    </>
  )
}

export {Content}
