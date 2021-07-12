import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/team',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/team/:id',
		name: 'Team',
		component: () => import('../views/TeamMember.vue'),
	},
	{
		path: '/science',
		name: 'Science',
		component: () => import('../views/Science.vue'),
	},
	{
		path: '/press',
		name: 'Press Releases',
		component: () => import('../views/PressReleases.vue'),
		children: [
			{
				path: '',
				component: () => import('../views/PressList.vue'),
			},
			{
				path: 'p/:page',
				component: () => import('../views/PressList.vue'),
			},
			{
				path: ':slug',
				component: () => import('../views/PressRelease.vue'),
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

router.afterEach((to, from) => {
	if (from.path == '/team' && to.path.startsWith('/team/')) {
		to.meta.transitionName = 'teamFade'
		to.meta.transitionMode = 'in-out'
	} else if (to.path == '/team' && from.path.startsWith('/team/')) {
		to.meta.transitionName = 'teamFade'
		to.meta.transitionMode = 'in-out'
	}
})

export default router
