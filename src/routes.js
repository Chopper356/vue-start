import VueRouter from 'vue-router';
import Register from './pages/Register';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Car from './pages/Car';

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
			component: Cars
		},
		{
			path: '/car/:id',
			component: Car
		}
	],
	mode: 'history'
});
