import {createAsyncThunk} from '@reduxjs/toolkit'
import HomepageHttpHandle from '../services/HomepageService'

const ActionListMenu: any = createAsyncThunk(
  'HomepageReducer/ActionListMenu',
  // naming convention (reducer/action_name)
  async () => {
    const res = await HomepageHttpHandle.ListMenu()
    return res.data
  }
)
const ActionCreateMenu: any = createAsyncThunk(
  'HomepageReducer/ActionCreateMenu',
  // naming convention (reducer/action_name)
  async (data: any) => {
    const res = await HomepageHttpHandle.CreateMenu(data)
    return res.data
  }
)
const ActionDeleteMenu: any = createAsyncThunk(
  'HomepageReducer/ActionDeleteMenu',
  // naming convention (reducer/action_name)
  async (id: number) => {
    const res = await HomepageHttpHandle.DeleteMenu(id)
    return res.data
  }
)
const ActionGetMenuItem: any = createAsyncThunk(
  'HomepageReducer/ActionGetMenuItem',
  // naming convention (reducer/action_name)
  async (id: number) => {
    const res = await HomepageHttpHandle.GetMenuItem(id)
    return res.data
  }
)
const ActionEditMenuItem: any = createAsyncThunk(
  'HomepageReducer/ActionEditMenuItem',
  // naming convention (reducer/action_name)
  async (data: any) => {
    const res = await HomepageHttpHandle.EditMenuItem(data)
    return res.data
  }
)
const ActionMenuTypeList: any = createAsyncThunk(
  'HomepageReducer/ActionMenuTypeList',
  // naming convention (reducer/action_name)
  async (data: any) => {
    const res = await HomepageHttpHandle.MenuTypeList()
    return res.data
  }
)
const ActionSectionList: any = createAsyncThunk(
  'HomepageReducer/ActionSectionList',
  // naming convention (reducer/action_name)
  async (data: any) => {
    const res = await HomepageHttpHandle.SectionList()
    return res.data
  }
)
const ActionCreatePage: any = createAsyncThunk(
  'HomepageReducer/ActionCreatePage',
  // naming convention (reducer/action_name)
  async (data: any) => {
    const res = await HomepageHttpHandle.CreatePage(data)
    return res.data
  }
)

export {
  ActionCreateMenu,
  ActionListMenu,
  ActionDeleteMenu,
  ActionGetMenuItem,
  ActionEditMenuItem,
  ActionMenuTypeList,
  ActionSectionList,
  ActionCreatePage,
}
