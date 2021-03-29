import VueRouter from 'vue-router';
import Register from './pages/Register';
import Home from './pages/Home';
import ErrorCmp from './pages/Error';

const Cars = resolve => {
	require.ensure(['./pages/Cars.vue'], () => {
		resolve (
			require('./pages/Cars.vue')
		);
	});
};
const Car = resolve => {
	require.ensure(['./pages/Car.vue'], () => {
		resolve (
			require('./pages/Car.vue')
		);
	});
};
const CarFull = resolve => {
	require.ensure(['./pages/CarFull.vue'], () => {
		resolve (
			require('./pages/CarFull.vue')
		);
	});
};

export default new VueRouter({
	routes: [
		{
			path: '',
			component: Home
		},
		{
			path: '/register',
			component: Register
		},
		{
			path: '/cars',
			component: Cars,
			name: 'cars'
		},
		{
			path: '/car/:id',
			component: Car,
			children: [
				{
					path: 'full',
					component: CarFull,
					name: 'carFull',
					beforeEnter(to, from, next) {
						console.log("beforeEvent true");

						next();
					}
				}
			]
		},
		{
			path: "/none",
			redirect: {
				name: 'cars'
			}
		},
		{
			path: '*',
			component: ErrorCmp
		}
	],
	mode: 'history',
	scrollBehavior(to, from, savePosition) {
		if (savePosition) {
			return savePosition
		}
		
		if (to.hash) {
			return { selector: to.hash }
		}

		return {
			x: 0,
			y: 500
		}
	}
});
