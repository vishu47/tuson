import React, {useEffect} from 'react'

// type Props = {}

const DashboardPage = () => {
  useEffect(() => {}, [])

  return (
    <>
      <section className='banner_section'>Tuson Center</section>
      {/* end::tabs */}
    </>
  )
}

export default function DashboardWrapper() {
  // for using different languages and changing the text in to other languages
  // const intl = useIntl()
  const {setHeaderTitle} = usePageData()
  useEffect(() => {
    setHeaderTitle('Dashboard')
  }, [setHeaderTitle])

  return (
    <>
      {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle> */}
      <DashboardPage />
    </>
  )
}
