import DashboardWrapper from 'app/pages/dashboard/client/DashboardWrapper'
import {Navigate, Route, Routes} from 'react-router-dom'

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
      <Route path='*' element={<Navigate to='/error/404' />} />
    </Routes>
  )
}

export {PrivateRoutes}
