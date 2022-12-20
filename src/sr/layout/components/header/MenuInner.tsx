import {MenuItem} from './MenuItem'
import {usePageData} from 'sr/layout/master-layout'

export function MenuInner() {
  const {headerTitle} = usePageData()

  return (
    <>
      <MenuItem icon={'/media/icons/duotone/general/home.svg'} to='/dashboard' hasPadding={false} />
      <MenuItem icon={'/media/icons/duotone/general/gen0010.svg'} to='/builder' hasBorder={true} />
      <MenuItem title={headerTitle} to='/builder' hasPadding={false} />
      <MenuItem icon={'/media/icons/duotone/general/info.svg'} svgColor={'text_secondary'} />
    </>
  )
}
