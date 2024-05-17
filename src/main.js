import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入sass
import "./assets/scss/style.scss"

//引入Proxima Nova字體
import './assets/Proxima_Nova_font/_ProximaNova_font.scss'

//引入bootstrape
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "bootstrap"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
