import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { Button, Select, Form, FormItem,Input,Checkbox, Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Table,
  TableColumn,
  DatePicker,
  Pagination,
  Option,
  OptionGroup,
  Dialog,
  Tabs,
  TabPane
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from './http/http'

Vue.use(Dialog);
Vue.use(Option);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(OptionGroup);
Vue.use(Pagination);
Vue.use(DatePicker);
Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Table);
Vue.use(TableColumn);



Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
