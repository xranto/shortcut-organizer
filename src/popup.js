//import './assets/main.css'


import { createApp } from 'vue'
import App from './Popup.vue'

import './assets/index.css'
const app = createApp(App)

app.config.globalProperties.t = function (key) {
	return chrome.i18n.getMessage(key);
};


app.mount('#popup')
