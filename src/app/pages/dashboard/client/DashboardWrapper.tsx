// import {useIntl} from 'react-intl'
// import {PageTitle} from 'sr/layout/master-layout'
import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button, KTSVG} from 'sr/helpers'
import {KTIMG} from 'sr/helpers/ui-components/KTIMG'
import {usePageData} from 'sr/layout/master-layout'

// type Props = {}

const DashboardPage = () => {
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    // document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    // return () => {
    //   document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    // }
  }, [])

  return (
    <>
      {/* breadcrumbs */}
      {/* <PageTitle
        breadcrumbs={[
          {title: 'breadcrumb', path: '/dashboard', isActive: true},
          {title: 'breadcrumb2', path: '', isActive: false},
        ]}
        description='Description'
      >
        Dashboard
      </PageTitle> */}

      {/* begin::tabs */}
      <section className='banner_section'>
        <div className='container-fluid'>
          <div className='row p-0 banner_img'>
            <KTIMG className='p-0' path='/media/img/stock/banner.png' alt='Main Banner' />
            {/* <div className='col-12 text-start py-6'>
            <Link to={'/extract-cheque'}>
            <h6>Extract Cheque Module</h6>
            </Link>
            </div>
            <div className='col-12 text-start py-6'>
            <Link to={'/extract-bank-statement'}>
            <h6>IRU Bank Statement</h6>
            </Link>
          </div> */}
          </div>
        </div>
      </section>
      <section className='why_swoosh'>
        <div className='container'>
          <div className='row pt-60'>
            <div className='col-md-12 d-flex flex-row justify-content-center align-items-center'>
              <p className='font-48 fonts-400 mr-10 '>Why</p>
              <p className='font-40 fonts-700'>SWOOSH</p>
            </div>
          </div>
          <div className='row pb-50'>
            <div className='col-md-12 d-flex flex-row justify-content-center align-items-center'>
              <p className='font-18 fonts-500 text-center m-auto content_header'>
                Any Template . Any Format. Any Source. Simple Drag and Drop Interface that helps to
                convert unstructured data to structured and more..
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 d-flex justify-content-center flex-gap-50'>
              <div className='icon_content bg_secondary_35 rounded-circle wx-100 hx-100 p-30'>
                <KTSVG svgClassName='text_primary' path='/media/icons/duotone/general/shield.svg' />
              </div>
              <div className='icon_content bg_secondary_35 rounded-circle wx-100 hx-100 p-30'>
                <KTSVG
                  svgClassName='text_primary'
                  path='/media/icons/duotone/general/building.svg'
                />
              </div>
              <div className='icon_content bg_secondary_35 rounded-circle wx-100 hx-100 p-30'>
                <KTSVG
                  svgClassName='text_primary'
                  path='/media/icons/duotone/general/document.svg'
                />
              </div>
            </div>
          </div>
          <div className='row mt-8 mb-65'>
            <div className='col-md-12 '>
              <p className='text-center text_primary font-24 fonts-500 pb-7'>Enterprise Grade</p>
              <p className='text-center font-18 fonts-500'>
                Robust. Reusable. Easy to use. Compliant to Bank Standards
              </p>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='why_swoosh_card pb-60'>
            <div className='card radius-8 card_gradient py-50 px-36'>
              <p className='font-24 fonts-500 text-white text-capitalize'>Bazaar</p>
              <p className='font-16 fonts-500 text-white pt-15 pb-30 card_description'>
                A place where you can find and try 20+ SWOOSH Applications in real-time
              </p>
              <Button
                className='px-28 font-16 fonts-500 text-white bg-transparent border border-white'
                icon='/media/icons/duotone/general/right-arrow.svg'
              >
                Read More
              </Button>
            </div>
            <div className='card radius-8 card_gradient py-50 px-36'>
              <p className='font-24 fonts-500 text-white text-capitalize'>Under The Hood</p>
              <p className='font-16 fonts-500 text-white pt-15 pb-30 card_description'>
                Powerful engines that helps in seamless API integration with KONG Gateway
              </p>
              <Button
                className='px-28 font-16 fonts-500 text-white bg-transparent border border-white'
                icon='/media/icons/duotone/general/right-arrow.svg'
              >
                Read More
              </Button>
            </div>
            <div className='card radius-8 why_swoosh_card_white py-50 px-36'>
              <p className='font-24 fonts-500 text-capitalize'>Use Cases</p>
              <p className='font-16 fonts-500 pt-15 pb-30 card_description'>
                Checkout how SWOOSH solved the business challenges using AI with human centric
                approach
              </p>
              <Button
                className='px-28 font-16 fonts-500 bg-transparent text_primary'
                icon='/media/icons/duotone/general/right-arrow.svg'
              >
                Read More
              </Button>
            </div>
            <div className='card radius-8 why_swoosh_card_white py-50 px-36'>
              <p className='font-24 fonts-500 text-capitalize'>Mayabot</p>
              <p className='font-16 fonts-500 pt-15 pb-30 card_description '>
                Algorithms which allows to reproduce human intelligence, behaviour and
                conversations.
              </p>
              <Button
                className='px-28 font-16 fonts-500 bg-transparent text_primary'
                icon='/media/icons/duotone/general/right-arrow.svg'
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className='conversational_ai container-fluid position-relative p-0 '>
        <div className=''>
          <div className='ai_banner hx-465'>
            <div className='ai_heading text-center py-55'>
              <p className='font-36 fonts-400 text-white'>Conversational AI Transforms Insurance</p>
              <p className='font-16 fonts-500 text-white m-auto py-10'>
                When Swoosh teams up with human colleagues to solve challenges for insurance
                providers and customers, she delivers world-class service and measurable results.
              </p>
            </div>
            <div className='container-fluid'>
              <div className='ai_cards position-absolute px-75 mb-60 row'>
                <div className='col-md-2 hx-400'>
                  <div className='h-100 card_gradient_ai radius-8 border border-white active p-30'>
                    <div className='svg_icon'>
                      <KTSVG
                        svgClassName='text_primary'
                        path='/media/icons/duotone/general/camera.svg'
                      />
                    </div>
                    <p className='fonts-500 font-24 py-18'>Number of Use cases live</p>
                    <p className='font-16 fonts-400 pb-20 pr-10'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
                <div className='col-md-2 hx-400'>
                  <div className='h-100 card_gradient_ai radius-8 border border-white p-30'>
                    <div className='svg_icon'>
                      <KTSVG
                        svgClassName='text_primary'
                        path='/media/icons/duotone/general/tv.svg'
                      />
                    </div>
                    <p className='fonts-500 font-24 py-18'>Domains</p>
                    <p className='font-16 fonts-400 pb-20 pr-10'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
                <div className='col-md-2 hx-400'>
                  <div className='h-100 card_gradient_ai radius-8 border border-white p-30'>
                    <div className='svg_icon'>
                      <KTSVG
                        svgClassName='text_primary'
                        path='/media/icons/duotone/general/recycle.svg'
                      />
                    </div>
                    <p className='fonts-500 font-24 py-18'>Transactions Processed</p>
                    <p className='font-16 fonts-400 pb-20 pr-10'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
                <div className='col-md-2 hx-400'>
                  <div className='h-100 card_gradient_ai radius-8 border border-white p-30'>
                    <div className='svg_icon'>
                      <KTSVG
                        svgClassName='text_primary'
                        path='/media/icons/duotone/general/clock-history.svg'
                      />
                    </div>
                    <p className='fonts-500 font-24 py-18'>Speed / Latency</p>
                    <p className='font-16 fonts-400 pb-20 pr-10'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
                <div className='col-md-2 hx-400'>
                  <div className='h-100 card_gradient_ai radius-8 border border-white p-30'>
                    <div className='svg_icon'>
                      <KTSVG
                        svgClassName='text_primary'
                        path='/media/icons/duotone/general/clock-history.svg'
                      />
                    </div>
                    <p className='fonts-500 font-24 py-18'>Entities trained</p>
                    <p className='font-16 fonts-400 pb-20 pr-10'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
                <div className='col-md-2 hx-400'>
                  <div className='h-100 card_gradient_ai radius-8 border border-white p-30'>
                    <div className='svg_icon'>
                      <KTSVG
                        svgClassName='text_primary'
                        path='/media/icons/duotone/general/accuracy.svg'
                      />
                    </div>
                    <p className='fonts-500 font-24 py-18'>Accuracy</p>
                    <p className='font-16 fonts-400 pb-20 pr-10'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hx-250 bg-white'></div>
        </div>
      </section>
      <div className='ai_bot container pb-30'>
        <div className='ai_bot_card radius-8 card_gradient py-40 px-70'>
          <p className='font-36 fonts-500 text-white'>Looking for automate something?</p>
          <p className='font-18 fonts-500 pt-10 pb-20 desc text-white'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium.
          </p>
          <Button
            className='px-28 font-16 fonts-500 text-white bg-transparent border border-white'
            icon='/media/icons/duotone/general/right-arrow.svg'
          >
            Read More
          </Button>
        </div>
      </div>
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
