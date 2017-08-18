import Vue from 'vue';
Vue.config.productionTip = false;

import App from './components/App';


// mount point
new Vue({
	el: '#app',
	render: h => h(App)
});