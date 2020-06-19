<template>
  <div v-theme="'wide'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search Blogs" />
    <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.id">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title }}</h2>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    const axios = require("axios");
    axios
      .get("https://vue-blogging.firebaseio.com/posts.json")
      .then(res => {
        var blogsArray = [];
        for (let key in res.data) {
          res.data[key].id = key;
          blogsArray.push(res.data[key]);
        }
        this.blogs = blogsArray;
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {},
  //Filter(local)
  filters: {
    snippet(value) {
      return value.slice(0, 100) + "...";
    }
  },
  //directives(local)
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  },
  mixins: [searchMixin]
};
</script>

<style scoped>
input {
  max-width: 800px;
}
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
