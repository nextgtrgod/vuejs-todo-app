import Vue from 'vue';
Vue.config.productionTip = false;

import store from './store/store';
import App from './components/App';


// mount point
new Vue({
	el: '#app',
	store,
	render: h => h(App)
});