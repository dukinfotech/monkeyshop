import { vueGsheets } from 'vue-gsheets'
export default {
  mixins: [vueGsheets],
  date: () => ({
    COLUMNS: 3,
    sheetPageNumber: 1,
    SHEETID: '1Yc2esnockqfrNweacmegXnavuPly8PvjaRzqlRzaXTE'
  })
}
Vue.component('v-select', VueSelect.VueSelect);
var app = new Vue({
  el: '#app',
  data: {

  }
});