import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PropertyCard from './components/PropertyCard.vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('PropertyCard', PropertyCard)

app.mount('#app')
