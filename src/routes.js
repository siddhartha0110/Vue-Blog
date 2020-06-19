import { component } from "vue/types/umd"

import showBlogs from './components/showBlogs.vue';
import addBlogs from './components/addBlog.vue';

module.exports = [
    { path: '/', component: showBlogs },
    { path: '/add', component: addBlogs },
];