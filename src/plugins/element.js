import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/ua'
import locale from 'element-ui/lib/locale'

import '../assets/scss/element/element-variables.scss'

locale.use(lang)

import { Button, Form ,Radio, Input, Select ,Checkbox, FormItem, Message, Menu, MenuItem, MenuItemGroup, Submenu,Table,
  TableColumn, Dropdown, DropdownItem, DropdownMenu, Tag, Popconfirm, Dialog } from 'element-ui';
Vue.use(Button)
Vue.use(Form)
Vue.use(Radio)
Vue.use(Input)
Vue.use(Select)
Vue.use(Checkbox)
Vue.use(FormItem)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Tag)
Vue.use(Popconfirm)
Vue.use(Dialog)
//Vue.use(Message)
Vue.component(Message.name, Message)

const prototype = ()=>{
  //Vue.prototype.$api = api
  /**
   *
   * @param type //success/warning/info/error
   * @param message
   */
  Vue.prototype.$message = ({type='info', message='', duration=3000})=>{
    console.log(27, message)
    Message({
      message: message,
      type: type
    });
  }
}

Vue.use(prototype)
