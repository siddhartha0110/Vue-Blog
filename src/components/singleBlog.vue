<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <hr />
    <h3>Author: {{ blog.author }}</h3>
    <h3>Category:</h3>
    <ul>
      <li v-for="category in blog.categories" :key="category.id">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    const axios = require("axios");
    axios
      .get("https://vue-blogging.firebaseio.com/posts/" + this.id + ".json")
      .then(result => {
        this.blog = result.data;
        console.log(this.blog);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style></style>
