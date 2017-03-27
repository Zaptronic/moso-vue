// VUE IMPORTS
import Vue from 'vue';
import VueRouter from 'vue-router';


// VUE COMPONENTS
Vue.component('moso-sidenav', require('./components/moso-sidenav/moso-sidenav.vue'));
Vue.component('moso-profile-picture', require('./components/moso-profile-picture/moso-profile-picture.vue'));
Vue.component('moso-drawer-list', require('./components/moso-drawer-list/moso-drawer-list.vue'));
Vue.component('moso-toolbar', require('./components/moso-toolbar/moso-toolbar.vue'));

Vue.component('version-badge', require('./components/version-badge/version-badge.vue'));


// VUE-ROUTER
Vue.use(VueRouter);

import profile from './views/profile.vue';
import resume from './views/resume.vue';
import portfolio from './views/portfolio.vue';
import notfound from './views/notfound.vue';


// ROUTES
const routes = [
    { path: '/', component: profile, name: 'Profile ' },
    { path: '/profile', component: profile, name: 'Profile' },
    { path: '/resume', component: resume, name: 'Resume' },
    { path: '/portfolio', component: portfolio, name: 'Portfolio' },
    { path: '/404', component: notfound, name: '404 - page not found' },
    { path: '*', redirect: '404' }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,

    methods: {
        toggleSidenav() {
            this.$refs.sidenav.toggle();
        }
    }
}).$mount('#app')
