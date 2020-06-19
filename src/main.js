import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import cors from 'cors';
import VueRouter from 'vue-router';
import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import singleBlog from './components/singleBlog.vue';

Vue.prototype.$http = axios;
Vue.use(cors);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: showBlogs },
    { path: '/add', component: addBlog },
    { path: '/blog/:id', component: singleBlog }
  ],
  mode: 'history'
});

//Directives(Global)
Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px";
    }
    else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px";
    }

    if (binding.arg == 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})

//Filters (Global)
Vue.filter('to-uppercase', function (val) {
  return val.toUpperCase();
})


new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})
