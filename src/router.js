
import Vue from 'vue';
import Router from 'vue-router';
import { store } from "./store/store";

import home from './views/home.vue';
import profile from './views/profile.vue';
import panel from './views/panel.vue';
import testView from './views/testView.vue';
import testView2 from './views/testView2.vue';
import landing from './views/landing.vue';
import resources from './views/resources.vue';
import forum from './views/forum.vue';

Vue.use(Router);

const router = new Router({


    mode: "history",

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
            meta: { 'requiresAuth': true },
            children: [
                {
                    path: '/profile',
					name: 'profile',
					component : profile
                },
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
                },
                {
                    path: '/test-view-2',
                    name: 'testView2',
                    component: testView2,
                }
            ]
        },

        {
            path: '/test-view',
            name: 'testView',
            component: testView,
        }

    ]
});



router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)){
        if(!store.getters.loggedInUser){
            // ! User is not logged in. redirect to /landing.
            next({name: "landing"});
        } else {
            // * Logged in.
            next();
        }
    } else {
        // * route doesn't require auth. keep going.
        next();
    }
});

export default router;
