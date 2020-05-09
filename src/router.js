
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import home from './views/home.vue';
import panel from './views/panel.vue';
import testView from './views/testView.vue';
import landing from './views/landing.vue';
import resources from './views/resources.vue';
import forum from './views/forum.vue';

const router = new Router({
    routes: [

        {
            path: "/",
            name: 'landing',
            component: landing
        },

        {
            path: '/home',
            name: 'home',
            component: home,
            children: [
                {
                    path: '/panel',
					name: 'panel',
					component : panel
                },
                {
                    path: '/resources',
					name: 'resources',
					component : resources
                },
                {
                    path: '/forum',
					name: 'forum',
					component : forum
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
