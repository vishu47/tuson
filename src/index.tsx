import {createRoot} from 'react-dom/client'
// auth provider
// chart config
import {Chart} from 'chart.js'
// toastify
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Apps
// routes
import {AppRoutes} from './app/routing/AppRoutes'
// store redux
import {Provider} from 'react-redux'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_swooosh/assets/css/style.rtl.css'
//  **/
import {store} from 'tc/redux/store'
import {OriginalI18nProvider} from 'tc/i18n/Originali18n'

// chart register

const container = document.getElementById('root')

if (container) {
  createRoot(container).render(
    <Provider store={store}>
      {/* we use redux */}
      <OriginalI18nProvider>
        {/* provides language support */}
        {/* include/added login and sign up routes */}
        {/* <AuthProvider> */}
        <AppRoutes />
        <ToastContainer /> {/* original routes */}
        {/* </AuthProvider> */}
      </OriginalI18nProvider>
    </Provider>
  )
}
