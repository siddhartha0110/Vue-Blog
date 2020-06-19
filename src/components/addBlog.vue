<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label for="title">Blog Title</label>
      <input type="text" required v-model.lazy="blog.title" />
      <label for="content">Blog Content</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div style="margin-top:20px">Blog Category:</div>
      <div id="checkboxes">
        <div class="form-control">
          <label>Sports</label>
          <input type="checkbox" value="Sports" v-model="blog.categories" />
        </div>
        <div class="form-control">
          <label>Agriculture</label>
          <input
            type="checkbox"
            value="Agriculture"
            v-model="blog.categories"
          />
        </div>
        <div class="form-control">
          <label>Finance</label>
          <input type="checkbox" value="Finance" v-model="blog.categories" />
        </div>
        <div class="form-control">
          <label>Entertainment</label>
          <input
            type="checkbox"
            value="Entertainment"
            v-model="blog.categories"
          />
        </div>
        <div class="form-control">
          <label>Politics</label>
          <input type="checkbox" value="Politics" v-model="blog.categories" />
        </div>
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author.id">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post">Create My Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for creating the post!</h3>
    </div>
    <div id="preview">
      <h2>Preview</h2>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="category in blog.categories" :key="category.id">
          {{ category }}
        </li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: [
        "Independent Writer",
        "News-Industry Related",
        "Political Expert",
        "Entertainment Insider",
        "Sports Expert",
        "Finance Expert",
        "Agriculture Related"
      ],
      submitted: false
    };
  },
  methods: {
    post: function() {
      const axios = require("axios");

      axios
        .post("https://vue-blogging.firebaseio.com/posts.json", this.blog)
        .then(data => {
          console.log(data);
          this.submitted = true;
        });
    }
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  max-width: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes {
  display: flex;
  justify-content: space-around;
  margin-top: 2px;
  margin-bottom: 20px;
}
</style>
