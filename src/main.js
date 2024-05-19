import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入sass
import './assets/scss/style.scss'

//全局引入Proxima Nova字體
import './assets/Proxima_Nova_font/_ProximaNova_font.scss'

//引入bootstrape
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "bootstrap"

//引入aos
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.AOS = new AOS.init({
  offset: 350, // 觸動畫面偏移量（像素）
  duration: 400, // 動畫持續時間（毫秒）
  easing: 'ease-in-out', // 动画缓动函数
  once: false, // 動畫是否只有執行一次
  mirror: false // 是否在向上滾動時觸發畫面
})
app.mount('#app')
