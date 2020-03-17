
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import home from './views/home.vue';
import panel from './views/panel.vue';
import testView from './views/testView.vue';

const router = new Router({
    routes: [

        {
            path: '/',
            name: 'home',
            component: home,
            children: [
                {
                    path: '/panel',
					name: 'panel',
					component : panel
				}
            ]
        },

        {
            path: '/test-view',
            name: 'testView',
            component: testView,
        }

    ]
})

export default router;
