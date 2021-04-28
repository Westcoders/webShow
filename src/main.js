import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')
/*Vue.createApp({
    data() {
      return {
        checkedNames: [],
        counter1: 0,
        ture:[true],
        counter2: 0,
        ccc:'',
      }
    },
     methods:{
        abc(){
            if (this.counter2 % 2 == 0) {
                this.ture = true
                this.ccc = 'checked = "<input type="checkbox" checked="ture" id="one" class="" value="1" v-model="checkedNames">" '
            }
        }
    }

  }).mount('#aaa')
