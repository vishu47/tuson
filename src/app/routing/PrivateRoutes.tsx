import DashboardWrapper from 'app/pages/dashboard/client/DashboardWrapper'
import BuilderPageWrapper from 'app/pages/layout-builder/BuilderPageWrapper'
import {Route, Routes, Navigate, useLocation} from 'react-router-dom'
import {MasterLayout} from 'sr/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {ChequeExtractUrl, ProcessUrls} from './Routes'
import AdminDashboardWrapper from 'app/pages/dashboard/admin/AdminDashboardWrapper'
import {AdminMasterLayout} from 'sr/layout/AdminMasterLayout'
import BazaarApps from 'app/pages/dashboard/client/static/BazaarApps'
import UseCases from 'app/pages/dashboard/client/static/UseCases'
import Help from 'app/pages/dashboard/client/static/Help'
import UnderTheHood from 'app/pages/dashboard/client/static/UnderTheHood'
import PillersOfSupport from 'app/pages/dashboard/client/static/PillersOfSupport'
import AiEngies from 'app/pages/dashboard/client/static/AiEngies'

type WithChildren = {
  children: any
}

const PrivateRoutes = () => {
  return (
    <Routes>
      {/* master layout provides all the necessary components */}
      {/* Redirect to Dashboard after success login/registration */}
      <Route path='auth/*' element={<Navigate to='/dashboard' />} />
      {/* Pages */}
      <Route path='/dashboard' element={<DashboardWrapper />} />
      <Route path='/bazaar' element={<BazaarApps />} />
      <Route path='/under-the-hood' element={<UnderTheHood />} />
      <Route path='/pillers-of-support' element={<PillersOfSupport />} />
      <Route path='/help' element={<Help />} />
      <Route path='/use-cases' element={<UseCases />} />
      <Route path='/ai-engines' element={<AiEngies />} />
      <Route path='builder' element={<BuilderPageWrapper />} />
      {/* <Route path='menu-test' element={<MenuTestPage />} /> */}
      {/* Lazy Modules */}
      <Route path='/engine/process' element={<BuilderPageWrapper />} />
      {ChequeExtractUrl()}
      {ProcessUrls()}
      <Route path='*' element={<Navigate to='/error/404' />} />
      {/* admin routes */}
      <Route element={<AdminMasterLayout />}>
        <Route path='/admin' element={<AdminDashboardWrapper />} />
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

export {PrivateRoutes}
