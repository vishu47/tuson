import {toast} from 'react-toastify'

const Capitalzed = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export const Missing = (data?: string) => {
  if (data) {
    return toast.success(`Created ${Capitalzed(data)} successfully`)
  } else {
    return toast.success(`Something is missing!`)
  }
}
