// import {ChangeHeaderNameType} from './Type'

import {Navigate, useLocation, useNavigate} from 'react-router-dom'
import {StringOptions} from 'sass'

export class HeaderTitle {
  title: any
  constructor(title: any) {
    this.title = title
  }
  getTitle() {
    return this.title
  }
  setTitle(title: any) {
    return (this.title = title)
  }
}

export function CheckForUrlName() {
  const pathname = window.location.pathname
  const title: String | undefined = pathname.split('/')[2]
  const formatTitle = title ? title.replaceAll('-', ' ').toUpperCase() : ''
  return formatTitle
}

export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}
