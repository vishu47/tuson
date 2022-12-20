import axios from 'axios'
import {AdminHttpAxios} from 'libraries/http/HttpAxios'

class HomepageHttpHandle {
  // list menu api
  async ListMenu() {
    return AdminHttpAxios.get('/create-menu')
  }
  // create menu api
  async CreateMenu(data: any) {
    return AdminHttpAxios.post('/create-menu', data)
  }
  // create page api
  async CreatePage(data: any) {
    return AdminHttpAxios.post('/create-page', data)
  }
  // delete menu api
  async DeleteMenu(id: number) {
    return AdminHttpAxios.delete(`/menu/${id}/`)
  }
  // get menu item api
  async GetMenuItem(id: number) {
    return AdminHttpAxios.get(`/menu/${id}/`)
  }
  // edit menu item api
  async EditMenuItem(data: any) {
    return AdminHttpAxios.put(`/menu/${data.id}/`, data)
  }
  // get menu type api
  async MenuTypeList() {
    return AdminHttpAxios.get(`/create-menu-type`)
  }
  // get menu type api
  async SectionList() {
    return AdminHttpAxios.get(`/create-page`)
  }
}

export default new HomepageHttpHandle()
