<template>
  <div>
    <div>
      <v-btn icon small to="/posts">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </div>
    <div class="text-center">
      <h2>Add New Post</h2>
    </div>
    <div class="px-16">
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="title"
          :rules="titleRules"
          label="Title"
          required
        ></v-text-field>

        <v-text-field
          v-model="description"
          :rules="descriptionRules"
          label="Description"
          required
        ></v-text-field>

        <v-text-field
          v-model="content"
          :rules="contentRules"
          label="Content"
          required
        ></v-text-field>

        <v-text-field
          v-model="author"
          :rules="authorRules"
          label="Author"
          required
        ></v-text-field>

        <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>

        <v-btn color="success" @click="submitAddNewPost">Add</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import PostDataService from "../../services/PostDataService";

export default {
  name: "AddPost",

  data: () => ({
    title: "",
    titleRules: [(v) => !!v || "Title is required"],
    description: "",
    descriptionRules: [(v) => !!v || "Description is required"],
    content: "",
    contentRules: [(v) => !!v || "Content is required"],
    author: "",
    authorRules: [(v) => !!v || "Author is required"],
  }),

  methods: {
    reset() {
      this.$refs.form.reset();
    },

    submitAddNewPost() {
      if (this.$refs.form.validate()) {
        // check validate, neu k co error thi ok, co thi dung lai
        let data = {
          title: this.title,
          description: this.description,
          content: this.content,
          author: this.author,
        };

        PostDataService.create(data)
          .then((response) => {
            this.id = response.data.id;
            this.$router.push("/posts");
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
};
</script>