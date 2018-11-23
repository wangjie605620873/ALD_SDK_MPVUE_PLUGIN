import { MpvueApp } from '../static/ald-stat'


import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue( MpvueApp(App) )
app.$mount()
