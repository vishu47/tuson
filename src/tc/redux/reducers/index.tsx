import {combineReducers} from '@reduxjs/toolkit'
import {useSelector} from 'react-redux'
import ClientReducer from '../client/reducers'

const rootReducer = combineReducers({
  client: ClientReducer,
})

const useClientSelector = () => {
  return useSelector((state: any) => state.client)
}
// const useClientSelector: TypedUseSelectorHook<RootState> = useSelector

export {rootReducer, useClientSelector}
