import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import router from './router.js'

const app = createApp(App).use(Quasar, quasarUserOptions) 



app.use(router)

app.mount('#app')
