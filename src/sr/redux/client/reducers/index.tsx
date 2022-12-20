import {combineReducers} from '@reduxjs/toolkit'
import HomepageReducer from './HomepageReducer'

const ClientReducer = combineReducers({
  homepage: HomepageReducer,
})

export default ClientReducer
