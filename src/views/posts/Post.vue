<template>
  <div>
    <div class="search pt-5">
      <v-row class="no-gutters">
        <v-col :cols="2">
          <v-btn depressed rounded class="success" to="/posts/add">
            <v-icon left>mdi-plus</v-icon>
            <span>Add New Post</span>
          </v-btn>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="text-center" :cols="5">
          <v-text-field
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
    </div>

    <div class="content pt-5">
      <v-simple-table fixed-header height="300px">
        <thead>
          <tr>
            <th class="text-center blue th1">Title</th>
            <th class="text-center green th2">Description</th>
            <th class="text-center orange th3">Content</th>
            <th class="text-center purple th4">Author</th>
            <th class="text-center red th5">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in posts" :key="index">
            <td>{{ post.title }}</td>
            <td>{{ post.description }}</td>
            <td>{{ post.content }}</td>
            <td>{{ post.author }}</td>
            <td>
              <v-row class="no-gutters">
                <v-col class="text-center">
                  <v-btn
                    small
                    icon
                    outlined
                    class="warning"
                    :to="`/posts/edit/${post.id}`"
                    @click="editPost"
                    :id="post.id"
                  >
                    <v-icon small>mdi-pencil</v-icon>
                  </v-btn>
                </v-col>
                <v-col class="text-center">
                  <v-btn
                    small
                    icon
                    outlined
                    class="error"
                    @click="deletePost"
                    :id="post.id"
                  >
                    <v-icon small>mdi-delete</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import PostDataService from "../../services/PostDataService";

export default {
  name: "Post",

  data: () => ({
    posts: [],
  }),

  methods: {
    getAllPosts() {
      PostDataService.getAll()
        .then((response) => {
          this.posts = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deletePost(e) {
      let postId = e.currentTarget.id;

      let idx = this.posts.findIndex((post) => post.id === postId);

      PostDataService.delete(postId)
        .then((res) => {
          this.posts.splice(idx, 1);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    editPost(e) {
      let postId = e.currentTarget.id;

      PostDataService.get(postId).then(res => {
        this.title = res.data.title;
        this.description = res.data.description;
        this.content = res.data.content;
        this.author = res.data.author;
        console.log(res.data);
      });
    },
  },

  mounted() {
    this.getAllPosts();
  },
};
</script>

<style>
.th1 {
  width: 20%;
}
.th2 {
  width: 20%;
}
.th3 {
  width: 35%;
}
.th4 {
  width: 15%;
}
.th5 {
  width: 10%;
}
</style>