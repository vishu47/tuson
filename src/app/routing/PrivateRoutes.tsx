import DashboardWrapper from 'app/pages/dashboard/client/DashboardWrapper'
import BuilderPageWrapper from 'app/pages/layout-builder/BuilderPageWrapper'
import {Route, Routes, Navigate, useLocation} from 'react-router-dom'
import {MasterLayout} from 'sr/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {ChequeExtractUrl, ProcessUrls} from './Routes'
import AdminDashboardWrapper from 'app/pages/dashboard/admin/AdminDashboardWrapper'
import {AdminMasterLayout} from 'sr/layout/AdminMasterLayout'

type WithChildren = {
  children: any
}

const PrivateRoutes = () => {
  return (
    <Routes>
      {/* master layout provides all the necessary components */}
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registration */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='/dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        {/* <Route path='menu-test' element={<MenuTestPage />} /> */}
        {/* Lazy Modules */}
        <Route path='/engine/process' element={<BuilderPageWrapper />} />
        {ChequeExtractUrl()}
        {ProcessUrls()}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
      {/* admin routes */}
      <Route element={<AdminMasterLayout />}>
        <Route path='/admin' element={<AdminDashboardWrapper />} />

        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

export {PrivateRoutes}
