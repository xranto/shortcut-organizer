import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SettingView from '../views/SettingView.vue'
import SettingIndex from '../views/SettingView/Index.vue'
import Personalization from '../views/SettingView/Personalization.vue'
import Search from '../views/SettingView/Search.vue'

export const router = createRouter({
	history: createWebHashHistory(), 
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/setting',
			name: 'setting',
			component: SettingView,
			children: [
				{
					path: '',
					name: 'setting-index',
					component: SettingIndex
				},
				{
					path: 'personalization',
					name: 'personalization',
					component: Personalization
				},
				{
					path: 'search',
					name: 'search',
					component: Search
				}
			]
		}
		
	]
});