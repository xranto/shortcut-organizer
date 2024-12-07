//import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import { router  } from './router'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'

import './assets/index.css'



const app = createApp(App)

app.config.globalProperties.t = function (key) {
	return chrome.i18n.getMessage(key);
};

app.use(router)
app.use(ContextMenu)   

app.mount('#app')
